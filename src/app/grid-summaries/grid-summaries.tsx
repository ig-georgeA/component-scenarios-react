import { IgrColumn, IgrGrid, IgrGridModule, IgrTreeGrid, IgrTreeGridModule } from '@infragistics/igniteui-react-grids';
import { useGetEmployees } from '../hooks/northwind-hooks';
import '@infragistics/igniteui-react-grids/grids/combined.js';
import styles from './grid-summaries.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

IgrGridModule.register();
IgrTreeGridModule.register();

export default function GridSummaries() {
  const classes = createClassTransformer(styles);
  const { northwindEmployees } = useGetEmployees();

  return (
    <>
      <div className={classes("row-layout grid-summaries-container")}>
        <IgrGrid data={northwindEmployees} primaryKey="employeeID" allowFiltering={true} filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar list")}>
          <IgrColumn field="employeeID" dataType="number" header="employeeID" groupable={true} sortable={true} hasSummary={true} selectable={false}></IgrColumn>
          <IgrColumn field="lastName" dataType="string" header="lastName" groupable={true} sortable={true} hasSummary={true} selectable={false}></IgrColumn>
          <IgrColumn field="firstName" dataType="string" header="firstName" groupable={true} sortable={true} hasSummary={true} selectable={false}></IgrColumn>
          <IgrColumn field="title" dataType="string" header="title" groupable={true} sortable={true} hasSummary={true} selectable={false}></IgrColumn>
          <IgrColumn field="titleOfCourtesy" dataType="string" header="titleOfCourtesy" groupable={true} sortable={true} hasSummary={true} selectable={false}></IgrColumn>
          <IgrColumn field="birthDate" dataType="date" header="birthDate" groupable={true} sortable={true} hasSummary={true} selectable={false}></IgrColumn>
          <IgrColumn field="hireDate" dataType="date" header="hireDate" groupable={true} sortable={true} hasSummary={true} selectable={false}></IgrColumn>
          <IgrColumn field="address.street" dataType="string" header="address street" groupable={true} sortable={true} hasSummary={true} selectable={false}></IgrColumn>
          <IgrColumn field="address.city" dataType="string" header="address city" groupable={true} sortable={true} hasSummary={true} selectable={false}></IgrColumn>
          <IgrColumn field="address.region" dataType="string" header="address region" groupable={true} sortable={true} hasSummary={true} selectable={false}></IgrColumn>
          <IgrColumn field="address.postalCode" dataType="string" header="address postalCode" groupable={true} sortable={true} hasSummary={true} selectable={false}></IgrColumn>
          <IgrColumn field="address.country" dataType="string" header="address country" groupable={true} sortable={true} hasSummary={true} selectable={false}></IgrColumn>
          <IgrColumn field="address.phone" dataType="string" header="address phone" groupable={true} sortable={true} hasSummary={true} selectable={false}></IgrColumn>
          <IgrColumn field="managerID" dataType="number" header="managerID" groupable={true} sortable={true} hasSummary={true} selectable={false}></IgrColumn>
          <IgrColumn field="notes" dataType="string" header="notes" groupable={true} sortable={true} hasSummary={true} selectable={false}></IgrColumn>
          <IgrColumn field="avatarUrl" dataType="string" header="avatarUrl" groupable={true} sortable={true} hasSummary={true} selectable={false}></IgrColumn>
        </IgrGrid>
        <IgrTreeGrid data={northwindEmployees} primaryKey="employeeID" foreignKey="managerID" allowFiltering={true} filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar list")}>
          <IgrColumn field="employeeID" dataType="number" header="employeeID" sortable={true} hasSummary={true} selectable={false}></IgrColumn>
          <IgrColumn field="lastName" dataType="string" header="lastName" sortable={true} hasSummary={true} selectable={false}></IgrColumn>
          <IgrColumn field="firstName" dataType="string" header="firstName" sortable={true} hasSummary={true} selectable={false}></IgrColumn>
          <IgrColumn field="title" dataType="string" header="title" sortable={true} hasSummary={true} selectable={false}></IgrColumn>
          <IgrColumn field="titleOfCourtesy" dataType="string" header="titleOfCourtesy" sortable={true} hasSummary={true} selectable={false}></IgrColumn>
          <IgrColumn field="birthDate" dataType="date" header="birthDate" sortable={true} hasSummary={true} selectable={false}></IgrColumn>
          <IgrColumn field="hireDate" dataType="date" header="hireDate" sortable={true} hasSummary={true} selectable={false}></IgrColumn>
          <IgrColumn field="address.street" dataType="string" header="address street" sortable={true} hasSummary={true} selectable={false}></IgrColumn>
          <IgrColumn field="address.city" dataType="string" header="address city" sortable={true} hasSummary={true} selectable={false}></IgrColumn>
          <IgrColumn field="address.region" dataType="string" header="address region" sortable={true} hasSummary={true} selectable={false}></IgrColumn>
          <IgrColumn field="address.postalCode" dataType="string" header="address postalCode" sortable={true} hasSummary={true} selectable={false}></IgrColumn>
          <IgrColumn field="address.country" dataType="string" header="address country" sortable={true} hasSummary={true} selectable={false}></IgrColumn>
          <IgrColumn field="address.phone" dataType="string" header="address phone" sortable={true} hasSummary={true} selectable={false}></IgrColumn>
          <IgrColumn field="managerID" dataType="number" header="managerID" sortable={true} hasSummary={true} selectable={false}></IgrColumn>
          <IgrColumn field="notes" dataType="string" header="notes" sortable={true} hasSummary={true} selectable={false}></IgrColumn>
          <IgrColumn field="avatarUrl" dataType="string" header="avatarUrl" sortable={true} hasSummary={true} selectable={false}></IgrColumn>
        </IgrTreeGrid>
      </div>
    </>
  );
}
