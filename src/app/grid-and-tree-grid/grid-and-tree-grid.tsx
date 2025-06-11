import { IgrColumn, IgrGrid, IgrGridModule, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarHiding, IgrGridToolbarPinning, IgrGridToolbarTitle, IgrPaginator, IgrPaginatorModule, IgrTreeGrid, IgrTreeGridModule } from '@infragistics/igniteui-react-grids';
import { useState } from 'react';
import { useGetCustomerDtoPagedResultDto, useGetEmployeeDtoList } from '../hooks/ignorthwind-api-hooks';
import '@infragistics/igniteui-react-grids/grids/combined.js';
import styles from './grid-and-tree-grid.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

IgrGridModule.register();
IgrPaginatorModule.register();
IgrTreeGridModule.register();

export default function GridAndTreeGrid() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const [basicGrid1_Page_Index, setBasicGrid1_Page_Index] = useState<number | undefined>(0);
  const [basicGrid1_Page_Size, setBasicGrid1_Page_Size] = useState<number | undefined>(15);
  const { iGNorthwindAPICustomerDtoPagedResultDto: basicGrid1_Data_Request } = useGetCustomerDtoPagedResultDto(basicGrid1_Page_Index as any, basicGrid1_Page_Size as any, '');
  const { iGNorthwindAPIEmployeeDto } = useGetEmployeeDtoList();

  return (
    <>
      <div className={classes("column-layout grid-and-tree-grid-container")}>
        <div className={classes("row-layout group")}>
          <IgrGrid data={basicGrid1_Data_Request?.items} primaryKey="customerId" rowSelection="single" hideRowSelectors={true} rowEditable={true} pagingMode="Remote" moving={true} allowFiltering={true} filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar list")}>
            <IgrGridToolbar>
              <IgrGridToolbarActions>
                <IgrGridToolbarPinning></IgrGridToolbarPinning>
                <IgrGridToolbarHiding></IgrGridToolbarHiding>
              </IgrGridToolbarActions>
              <IgrGridToolbarTitle>
                <span key={uuid()}>Excel style filtering &amp; remote paging</span>
              </IgrGridToolbarTitle>
            </IgrGridToolbar>
            <IgrPaginator perPage={basicGrid1_Page_Size} totalRecords={basicGrid1_Data_Request?.totalRecordsCount} page={basicGrid1_Page_Index} perPageChange={(_c, e) => setBasicGrid1_Page_Size(prevState => { prevState!.null = e.detail; return { ...prevState! }; })} pageChange={(_c, e) => setBasicGrid1_Page_Index(prevState => { prevState!.null = e.detail; return { ...prevState! }; })}></IgrPaginator>
            <IgrColumn field="customerId" dataType="string" header="customerId" groupable={true} sortable={true} resizable={true} selectable={false}></IgrColumn>
            <IgrColumn field="companyName" dataType="string" header="companyName" groupable={true} sortable={true} resizable={true} hasSummary={true} selectable={false}></IgrColumn>
            <IgrColumn field="contactName" dataType="string" header="contactName" groupable={true} sortable={true} resizable={true} hasSummary={true} selectable={false}></IgrColumn>
            <IgrColumn field="contactTitle" dataType="string" header="contactTitle" groupable={true} sortable={true} resizable={true} hasSummary={true} selectable={false}></IgrColumn>
            <IgrColumn field="address.street" dataType="string" header="address street" groupable={true} sortable={true} resizable={true} hasSummary={true} selectable={false}></IgrColumn>
            <IgrColumn field="address.city" dataType="string" header="address city" groupable={true} sortable={true} resizable={true} hasSummary={true} selectable={false}></IgrColumn>
            <IgrColumn field="address.region" dataType="string" header="address region" groupable={true} sortable={true} resizable={true} hasSummary={true} selectable={false}></IgrColumn>
            <IgrColumn field="address.postalCode" dataType="string" header="address postalCode" groupable={true} sortable={true} resizable={true} hasSummary={true} selectable={false}></IgrColumn>
            <IgrColumn field="address.country" dataType="string" header="address country" groupable={true} sortable={true} resizable={true} hasSummary={true} selectable={false}></IgrColumn>
            <IgrColumn field="address.phone" dataType="string" header="address phone" groupable={true} sortable={true} resizable={true} hasSummary={true} selectable={false}></IgrColumn>
          </IgrGrid>
          <IgrTreeGrid data={iGNorthwindAPIEmployeeDto} primaryKey="employeeId" foreignKey="reportsTo" pagingMode="Remote" allowFiltering={true} className={classes("ig-typography ig-scrollbar list")}>
            <IgrGridToolbar>
              <IgrGridToolbarTitle>
                <span key={uuid()}>Tree grid</span>
              </IgrGridToolbarTitle>
            </IgrGridToolbar>
            <IgrColumn field="lastName" dataType="string" header="lastName" width="199px" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="firstName" dataType="string" header="firstName" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="title" dataType="string" header="title" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="employeeId" dataType="number" header="employeeId" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="reportsTo" dataType="number" header="reportsTo" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="titleOfCourtesy" dataType="string" header="titleOfCourtesy" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="birthDate" dataType="date" header="birthDate" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="hireDate" dataType="date" header="hireDate" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="addressId" dataType="string" header="addressId" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="address.street" dataType="string" header="address street" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="address.city" dataType="string" header="address city" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="address.region" dataType="string" header="address region" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="address.postalCode" dataType="string" header="address postalCode" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="address.country" dataType="string" header="address country" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="address.phone" dataType="string" header="address phone" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="notes" dataType="string" header="notes" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="avatarUrl" dataType="string" header="avatarUrl" sortable={true} selectable={false}></IgrColumn>
          </IgrTreeGrid>
        </div>
      </div>
    </>
  );
}
