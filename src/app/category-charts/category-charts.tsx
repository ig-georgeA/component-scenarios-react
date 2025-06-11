import { IgrCategoryChart, IgrCategoryChartModule, IgrPieChart, IgrPieChartModule } from '@infragistics/igniteui-react-charts';
import { IgrColumn, IgrGrid, IgrGridModule } from '@infragistics/igniteui-react-grids';
import { useGetBoxOfficeRevenue, useGetGlobalElectricityDemand, useGetTrading } from '../hooks/financial-hooks';
import '@infragistics/igniteui-react-grids/grids/combined.js';
import styles from './category-charts.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

IgrCategoryChartModule.register();
IgrGridModule.register();
IgrPieChartModule.register();

export default function CategoryCharts() {
  const classes = createClassTransformer(styles);
  const { financialBoxOfficeRevenue } = useGetBoxOfficeRevenue();
  const { financialGlobalElectricityDemand } = useGetGlobalElectricityDemand();
  const { financialTrading } = useGetTrading();

  return (
    <>
      <div className={classes("row-layout category-charts-container")}>
        <div className={classes("column-layout group")}>
          <div className={classes("group_1")}>
            <IgrCategoryChart dataSource={financialBoxOfficeRevenue} chartType="Column" chartTitle="Column" includedProperties={['Franchise', 'TotalWorldBoxOfficeRevenue', 'HighestGrossingMovieInSeries']} computedPlotAreaMarginMode="Series"></IgrCategoryChart>
          </div>
        </div>
        <div className={classes("column-layout group")}>
          <div className={classes("group_1")}>
            <IgrCategoryChart dataSource={financialGlobalElectricityDemand} chartType="Area" chartTitle="Area" computedPlotAreaMarginMode="Series"></IgrCategoryChart>
          </div>
        </div>
        <div className={classes("column-layout group")}>
          <div className={classes("group_1")}>
            <IgrCategoryChart dataSource={financialBoxOfficeRevenue} chartType="Point" chartTitle="Point" computedPlotAreaMarginMode="Series"></IgrCategoryChart>
          </div>
        </div>
        <div className={classes("column-layout group")}>
          <div className={classes("group_1")}>
            <IgrCategoryChart dataSource={financialBoxOfficeRevenue} chartType="Line" chartTitle="Line" computedPlotAreaMarginMode="Series"></IgrCategoryChart>
          </div>
        </div>
        <div className={classes("column-layout group_2")}>
          <div className={classes("group_1")}>
            <IgrCategoryChart dataSource={financialBoxOfficeRevenue} chartType="Spline" chartTitle="Spline" computedPlotAreaMarginMode="Series"></IgrCategoryChart>
          </div>
        </div>
        <div className={classes("column-layout group_2")}>
          <div className={classes("group_3")}>
            <IgrCategoryChart dataSource={financialBoxOfficeRevenue} chartType="SplineArea" chartTitle="Spline area" computedPlotAreaMarginMode="Series"></IgrCategoryChart>
          </div>
        </div>
        <div className={classes("column-layout group_2")}>
          <div className={classes("group_1")}>
            <IgrCategoryChart dataSource={financialBoxOfficeRevenue} chartType="StepArea" chartTitle="Step area" computedPlotAreaMarginMode="Series"></IgrCategoryChart>
          </div>
        </div>
        <div className={classes("column-layout group_2")}>
          <div className={classes("group_1")}>
            <IgrCategoryChart dataSource={financialBoxOfficeRevenue} chartType="StepLine" chartTitle="Step line" computedPlotAreaMarginMode="Series"></IgrCategoryChart>
          </div>
        </div>
        <div className={classes("column-layout group_2")}>
          <div className={classes("group_1")}>
            <IgrCategoryChart dataSource={financialTrading} chartType="Waterfall" chartTitle="Waterfall" includedProperties={['category', 'openPrice']} computedPlotAreaMarginMode="Series"></IgrCategoryChart>
          </div>
        </div>
        <div className={classes("column-layout group_2")}>
          <h6 className={classes("h6")}>
            <span>Pie chart with start angle 270deg</span>
          </h6>
          <div className={classes("group_4")}>
            <IgrPieChart dataSource={financialGlobalElectricityDemand} startAngle="270" othersCategoryType="Number" othersCategoryThreshold={10} labelMemberPath="Label" valueMemberPath="Value"></IgrPieChart>
          </div>
          <IgrGrid data={financialGlobalElectricityDemand} primaryKey="Value" allowFiltering={true} filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid")}>
            <IgrColumn field="Value" dataType="number" header="Value" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="Label" dataType="string" header="Label" sortable={true} selectable={false}></IgrColumn>
          </IgrGrid>
        </div>
        <div className={classes("column-layout group_2")}>
          <h6 className={classes("h6")}>
            <span>Pie chart with label outside + others 20%</span>
          </h6>
          <div className={classes("group_4")}>
            <IgrPieChart dataSource={financialGlobalElectricityDemand} labelsPosition="OutsideEnd" othersCategoryThreshold={20} labelMemberPath="Label" valueMemberPath="Value"></IgrPieChart>
          </div>
        </div>
      </div>
    </>
  );
}
