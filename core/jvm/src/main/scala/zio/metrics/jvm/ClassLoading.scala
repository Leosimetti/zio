package zio.metrics.jvm

import zio.metrics.ZIOMetric
import zio.metrics.ZIOMetric.Gauge
import zio._
import zio.stacktracer.TracingImplicits.disableAutoTrace

import java.lang.management.{ClassLoadingMXBean, ManagementFactory}

trait ClassLoading extends JvmMetrics {
  override type Feature = ClassLoading
  override val featureTag = Tag[ClassLoading]

  /** The number of classes that are currently loaded in the JVM */
  private val loadedClassCount: Gauge[Int] =
    ZIOMetric.gauge("jvm_classes_loaded").contramap(_.toDouble)

  /**
   * The total number of classes that have been loaded since the JVM has started
   * execution
   */
  private val totalLoadedClassCount: Gauge[Long] =
    ZIOMetric.gauge("jvm_classes_loaded_total").contramap(_.toDouble)

  /**
   * The total number of classes that have been unloaded since the JVM has
   * started execution
   */
  private val unloadedClassCount: Gauge[Long] =
    ZIOMetric.gauge("jvm_classes_unloaded_total").contramap(_.toDouble)

  private def reportClassLoadingMetrics(
    classLoadingMXBean: ClassLoadingMXBean
  )(implicit trace: ZTraceElement): ZIO[Any, Throwable, Unit] =
    for {
      _ <- loadedClassCount.set(classLoadingMXBean.getLoadedClassCount)
      _ <- totalLoadedClassCount.set(classLoadingMXBean.getTotalLoadedClassCount)
      _ <- unloadedClassCount.set(classLoadingMXBean.getUnloadedClassCount)
    } yield ()

  def collectMetrics(implicit trace: ZTraceElement): ZIO[Clock with Scope, Throwable, ClassLoading] =
    for {
      classLoadingMXBean <-
        ZIO.attempt(ManagementFactory.getPlatformMXBean(classOf[ClassLoadingMXBean]))
      _ <- reportClassLoadingMetrics(classLoadingMXBean)
             .repeat(collectionSchedule)
             .interruptible
             .forkScoped
    } yield this
}

/** Exports metrics related to JVM class loading */
object ClassLoading extends ClassLoading with JvmMetrics.DefaultSchedule {
  def withSchedule(schedule: Schedule[Any, Any, Unit]): ClassLoading = new ClassLoading {
    override protected def collectionSchedule(implicit trace: ZTraceElement): Schedule[Any, Any, Unit] = schedule
  }
}