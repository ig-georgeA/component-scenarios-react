import { IgrColumn, IgrGrid, IgrGridModule } from '@infragistics/igniteui-react-grids';
import { IgrIconButton, IgrIconButtonModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import { useGetEmployees } from '../hooks/northwind-hooks';
import '@infragistics/igniteui-react-grids/grids/combined.js';
import styles from './child-view1.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

IgrGridModule.register();
IgrIconButtonModule.register();
IgrRippleModule.register();

export default function ChildView1() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const { northwindEmployees } = useGetEmployees();

  const columnHeaderTemplate = () => {
    return (
      <>
        <div className={classes("group_1")}>
          <div className={classes("row-layout group_2")}>
            <p className={classes("typography__body-1 text")}>
              <span>Column name</span>
            </p>
          </div>
          <div className={classes("row-layout group_3")}>
            <p className={classes("typography__body-1 text")}>
              <span>Column name</span>
            </p>
          </div>
          <div className={classes("row-layout group_4")}>
            <p className={classes("typography__body-1 text")}>
              <span>Column name</span>
            </p>
          </div>
        </div>
      </>
    )
  }

  const columnHeaderTemplate1 = () => {
    return (
      <>
        <div className={classes("group_5")}>
          <div className={classes("row-layout group_6")}>
            <p className={classes("typography__body-1 text")}>
              <span>Column name</span>
            </p>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className={classes("column-layout child-view-1-container")}>
        <IgrGrid data={northwindEmployees} primaryKey="employeeID" allowFiltering={true} filterMode="excelStyleFilter" height="426px" className={classes("ig-typography ig-scrollbar grid")} key={uuid()}>
          <IgrColumn sortable={true} selectable={false} key="331e6894-a916-480d-b8e4-d435ff6307a8"></IgrColumn>
          <IgrColumn field="lastName" dataType="string" header="lastName" sortable={true} selectable={false}></IgrColumn>
          <IgrColumn field="firstName" dataType="string" header="column -layout" width="396px" headerTemplate={columnHeaderTemplate} filterable={false} selectable={false}></IgrColumn>
          <IgrColumn field="employeeID" dataType="number" header="employeeID" sortable={true} selectable={false}></IgrColumn>
          <IgrColumn field="title" dataType="string" header="title" width="280px" headerTemplate={columnHeaderTemplate1} filterable={false} selectable={false}></IgrColumn>
          <IgrColumn field="titleOfCourtesy" dataType="string" header="titleOfCourtesy" sortable={true} selectable={false}></IgrColumn>
          <IgrColumn field="birthDate" dataType="date" header="birthDate" sortable={true} selectable={false}></IgrColumn>
          <IgrColumn field="hireDate" dataType="date" header="hireDate" sortable={true} selectable={false}></IgrColumn>
          <IgrColumn field="address.street" dataType="string" header="address street" sortable={true} selectable={false}></IgrColumn>
          <IgrColumn field="address.city" dataType="string" header="address city" sortable={true} selectable={false}></IgrColumn>
          <IgrColumn field="address.region" dataType="string" header="address region" sortable={true} selectable={false}></IgrColumn>
          <IgrColumn field="address.postalCode" dataType="string" header="address postalCode" sortable={true} selectable={false}></IgrColumn>
          <IgrColumn field="address.country" dataType="string" header="address country" sortable={true} selectable={false}></IgrColumn>
          <IgrColumn field="address.phone" dataType="string" header="address phone" sortable={true} selectable={false}></IgrColumn>
          <IgrColumn field="managerID" dataType="number" header="managerID" sortable={true} selectable={false}></IgrColumn>
          <IgrColumn field="notes" dataType="string" header="notes" sortable={true} selectable={false}></IgrColumn>
          <IgrColumn field="avatarUrl" dataType="string" header="avatarUrl" sortable={true} selectable={false}></IgrColumn>
        </IgrGrid>
        <div className={classes("group")}>
          <IgrIconButton>
            <span className={classes("material-icons")} key={uuid()}>
              <span key={uuid()}>add_box</span>
            </span>
            <IgrRipple key={uuid()}></IgrRipple>
          </IgrIconButton>
        </div>
      </div>
    </>
  );
}
