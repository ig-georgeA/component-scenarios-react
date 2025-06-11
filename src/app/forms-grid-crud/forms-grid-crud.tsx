import { IgrActionStrip, IgrActionStripModule, IgrColumn, IgrGrid, IgrGridBaseDirective, IgrGridEditingActions, IgrGridModule, IgrGridPinningActions, IgrPaginator, IgrPaginatorModule, IgrRowDataEventArgs } from '@infragistics/igniteui-react-grids';
import { IgrButton, IgrButtonModule, IgrInput, IgrInputModule, IgrRipple, IgrRippleModule, IgrSnackbar, IgrSnackbarModule, IgrTab, IgrTabPanel, IgrTabs, IgrTabsModule } from '@infragistics/igniteui-react';
import { useRef, useState } from 'react';
import { CustomerDto } from '../models/NorthwindSwagger/customer-dto';
import { deleteCustomerDto, postCustomerDto } from '../services/ignorthwind-api';
import { formDataToObject } from '../utils/form-utils';
import { postCustomerDto } from '../services/northwind-swagger';
import { useGetCustomerDto, useGetCustomerDtoPagedResultDto } from '../hooks/ignorthwind-api-hooks';
import '@infragistics/igniteui-react-grids/grids/combined.js';
import styles from './forms-grid-crud.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

IgrActionStripModule.register();
IgrButtonModule.register();
IgrGridModule.register();
IgrInputModule.register();
IgrPaginatorModule.register();
IgrRippleModule.register();
IgrSnackbarModule.register();
IgrTabsModule.register();

export default function FormsGridCRUD() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  let _partialCustomer: CustomerDto | undefined;
  const editform = useRef<HTMLFormElement>(null);
  const addform = useRef<HTMLFormElement>(null);
  const snackbarsuccess = useRef<IgrSnackbar>(null);
  const snackbarerror = useRef<IgrSnackbar>(null);
  const [grid_Page_Index, setGrid_Page_Index] = useState<number | undefined>(0);
  const [grid_Page_Size, setGrid_Page_Size] = useState<number | undefined>(15);
  const { iGNorthwindAPICustomerDtoPagedResultDto: grid_Data_Request } = useGetCustomerDtoPagedResultDto(grid_Page_Index as any, grid_Page_Size as any, '');
  const { iGNorthwindAPICustomerDto: selectedCustomer, setIGNorthwindAPICustomerDto: setSelectedCustomer } = useGetCustomerDto('ALFKI');

  async function rowDeletedGrid(_s: IgrGridBaseDirective, e: IgrRowDataEventArgs) {
    await deleteCustomerDto();
  }
  async function rowAddedGrid() {
    await postCustomerDto();
    setGrid_Page_Index(parseFloat('0'));
  }
  async function submitCustomerDto(args: React.FormEvent<HTMLFormElement>) {
    args.preventDefault();
    const value = formDataToObject(args.target as HTMLFormElement);
    await postCustomerDto(value);
  }
  async function submitCustomerDto1(args: React.FormEvent<HTMLFormElement>) {
    args.preventDefault();
    const value = formDataToObject(args.target as HTMLFormElement);
    await postCustomerDto(value);
  }

  return (
    <>
      <div className={classes("row-layout forms-grid-crud-container")}>
        <IgrGrid data={grid_Data_Request?.items} primaryKey="customerId" rowSelection="single" rowEditable={true} pagingMode="Remote" allowFiltering={true} filterMode="excelStyleFilter" rowDeleted={rowDeletedGrid} rowAdded={rowAddedGrid} rowSelectionChanging={(_c, e) => setSelectedCustomer(e.detail.newSelection[0])} className={classes("ig-typography ig-scrollbar grid")}>
          <IgrPaginator perPage={grid_Page_Size} totalRecords={grid_Data_Request?.totalRecordsCount} page={grid_Page_Index} pageChange={(_c, e) => setGrid_Page_Index(prevState => { prevState!.null = e.detail; return { ...prevState! }; })} perPageChange={(_c, e) => setGrid_Page_Size(e.detail)}></IgrPaginator>
          <IgrColumn field="customerId" dataType="string" header="customerId" sortable={true} selectable={false}></IgrColumn>
          <IgrColumn field="companyName" dataType="string" header="companyName" width="254px" sortable={true} selectable={false}></IgrColumn>
          <IgrColumn field="contactName" dataType="string" header="contactName" sortable={true} selectable={false}></IgrColumn>
          <IgrColumn field="contactTitle" dataType="string" header="contactTitle" sortable={true} selectable={false}></IgrColumn>
          <IgrColumn field="address.street" dataType="string" header="address street" sortable={true} selectable={false}></IgrColumn>
          <IgrColumn field="address.city" dataType="string" header="address city" sortable={true} selectable={false}></IgrColumn>
          <IgrColumn field="address.region" dataType="string" header="address region" sortable={true} selectable={false}></IgrColumn>
          <IgrColumn field="address.postalCode" dataType="string" header="address postalCode" sortable={true} selectable={false}></IgrColumn>
          <IgrColumn field="address.country" dataType="string" header="address country" sortable={true} selectable={false}></IgrColumn>
          <IgrColumn field="address.phone" dataType="string" header="address phone" sortable={true} selectable={false}></IgrColumn>
          <IgrActionStrip>
            <IgrGridPinningActions></IgrGridPinningActions>
            <IgrGridEditingActions addRow={true}></IgrGridEditingActions>
          </IgrActionStrip>
        </IgrGrid>
        <IgrTabs className={classes("tabs")}>
          <IgrTab selected={true} key={uuid()}>
            <span className={classes("material-icons")} key={uuid()}>
              <span key={uuid()}>edit</span>
            </span>
            <span key={uuid()}>Edit form</span>
          </IgrTab>
          <IgrTabPanel className={classes("column-layout tab-item-content")} key={uuid()}>
            <form onSubmit={submitCustomerDto} ref={editform} className={classes("column-layout edit_form")} key={uuid()}>
              <h6>
                <span>Edit Customers</span>
              </h6>
              <div className={classes("column-layout form_fields")}>
                <IgrInput defaultValue={selectedCustomer?.customerId} label="customerId" disabled outlined={true} name="customerId"></IgrInput>
                <IgrInput defaultValue={selectedCustomer?.companyName} label="companyName" required outlined={true} name="companyName">
                  <p slot="value-missing" key={uuid()}>This field is required</p>
                </IgrInput>
                <IgrInput defaultValue={selectedCustomer?.contactName} label="contactName" outlined={true} name="contactName"></IgrInput>
                <IgrInput defaultValue={selectedCustomer?.contactTitle} label="contactTitle" outlined={true} name="contactTitle"></IgrInput>
                <IgrInput defaultValue={selectedCustomer?.address?.street} label="address.street" outlined={true} name="address.street"></IgrInput>
                <IgrInput defaultValue={selectedCustomer?.address?.city} label="address.city" outlined={true} name="address.city"></IgrInput>
                <IgrInput defaultValue={selectedCustomer?.address?.region} label="address.region" outlined={true} name="address.region"></IgrInput>
                <IgrInput defaultValue={selectedCustomer?.address?.postalCode} label="address.postalCode" outlined={true} name="address.postalCode"></IgrInput>
                <IgrInput defaultValue={selectedCustomer?.address?.country} label="address.country" outlined={true} name="address.country"></IgrInput>
                <IgrInput defaultValue={selectedCustomer?.address?.phone} label="address.phone" outlined={true} name="address.phone"></IgrInput>
              </div>
              <div className={classes("row-layout actions")}>
                <IgrButton variant="outlined" type="reset" className={classes("button button_1")}>
                  <span key={uuid()}>Reset</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
                <IgrButton type="submit" onClick={() => setGrid_Page_Index(parseFloat('0'))} className={classes("button")}>
                  <span key={uuid()}>Update</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
              <IgrSnackbar>
                <span key={uuid()}>Your changes were saved successfully!</span>
              </IgrSnackbar>
              <IgrSnackbar>
                <span key={uuid()}>Uh-oh! Something went wrong.</span>
              </IgrSnackbar>
            </form>
            <div className={classes("row-layout actions")} key={uuid()}></div>
          </IgrTabPanel>
          <IgrTab key={uuid()}>
            <span className={classes("material-icons")} key={uuid()}>
              <span key={uuid()}>add</span>
            </span>
            <span key={uuid()}>Add form</span>
          </IgrTab>
          <IgrTabPanel className={classes("column-layout tab-item-content")} key={uuid()}>
            <form onSubmit={submitCustomerDto1} ref={addform} className={classes("column-layout edit_form")} key={uuid()}>
              <h6>
                <span>Add Customers</span>
              </h6>
              <div className={classes("column-layout form_fields")}>
                <IgrInput label="customerId" disabled outlined={true} name="customerId"></IgrInput>
                <IgrInput label="companyName" required outlined={true} name="companyName">
                  <p slot="value-missing" key={uuid()}>This field is required</p>
                </IgrInput>
                <IgrInput label="contactName" outlined={true} name="contactName"></IgrInput>
                <IgrInput label="contactTitle" outlined={true} name="contactTitle"></IgrInput>
                <IgrInput label="address.street" outlined={true} name="address.street"></IgrInput>
                <IgrInput label="address.city" outlined={true} name="address.city"></IgrInput>
                <IgrInput label="address.region" outlined={true} name="address.region"></IgrInput>
                <IgrInput label="address.postalCode" outlined={true} name="address.postalCode"></IgrInput>
                <IgrInput label="address.country" outlined={true} name="address.country"></IgrInput>
                <IgrInput label="address.phone" outlined={true} name="address.phone"></IgrInput>
              </div>
              <div className={classes("row-layout actions")}>
                <IgrButton variant="outlined" type="reset" className={classes("button")}>
                  <span key={uuid()}>Reset</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
                <IgrButton type="submit" className={classes("button")}>
                  <span key={uuid()}>Add</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
              <IgrSnackbar actionText="OK" action={() => snackbarsuccess?.current?.toggle()} ref={snackbarsuccess}>
                <span key={uuid()}>Your new submission was saved successfully!</span>
              </IgrSnackbar>
              <IgrSnackbar actionText="OK" action={() => snackbarerror?.current?.toggle()} ref={snackbarerror}>
                <span key={uuid()}>Uh-oh! Something went wrong.</span>
              </IgrSnackbar>
            </form>
            <div className={classes("row-layout actions")} key={uuid()}></div>
          </IgrTabPanel>
        </IgrTabs>
      </div>
    </>
  );
}
