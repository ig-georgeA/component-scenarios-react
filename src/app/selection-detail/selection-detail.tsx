import { IgrAvatar, IgrAvatarModule, IgrButton, IgrButtonModule, IgrCombo, IgrComboModule, IgrDialog, IgrDialogModule, IgrList, IgrListItem, IgrListModule, IgrRipple, IgrRippleModule, IgrSelect, IgrSelectItem, IgrSelectModule } from '@infragistics/igniteui-react';
import { IgrColumn, IgrGrid, IgrGridModule } from '@infragistics/igniteui-react-grids';
import { useEffect, useRef, useState } from 'react';
import { useGetCustomerDto, useGetCustomerDtoList, useGetOrderDetailDtoList, useGetOrderDtoList } from '../hooks/ignorthwind-api-hooks';
import '@infragistics/igniteui-react-grids/grids/combined.js';
import styles from './selection-detail.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

IgrAvatarModule.register();
IgrButtonModule.register();
IgrComboModule.register();
IgrDialogModule.register();
IgrGridModule.register();
IgrListModule.register();
IgrRippleModule.register();
IgrSelectModule.register();

export default function SelectionDetail() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const dialog = useRef<IgrDialog>(null);
  const __loaded = useRef<boolean>(false);
  const [varOrderID1, setVarOrderID1] = useState<number | undefined>(10265);
  const { iGNorthwindAPICustomerDto: varCustomer, setIGNorthwindAPICustomerDto: setVarCustomer } = useGetCustomerDto('BLONP');
  const { iGNorthwindAPICustomerDto } = useGetCustomerDtoList();
  const { iGNorthwindAPIOrderDto } = useGetOrderDtoList(varCustomer?.customerId as any);
  const { iGNorthwindAPIOrderDetailDto } = useGetOrderDetailDtoList(varOrderID1 as any);

  useEffect(() => {
    if (__loaded.current) {
      setVarOrderID1(undefined);
    }
  }, [varCustomer]);

  useEffect(() => {
    __loaded.current = true;
    return () => {
      __loaded.current = false;
    }
  }, []);

  return (
    <>
      <div className={classes("row-layout selection-detail-container")}>
        <div className={classes("column-layout group")}>
          <IgrList className={classes("list")}>
            {iGNorthwindAPICustomerDto?.map((item) => (
              <div style={{display: 'contents'}} onClick={() => setVarCustomer(item)} key={uuid()}>
                <IgrListItem>
                  <div slot="title" key={uuid()}>{item.companyName}</div>
                  <div slot="subtitle" key={uuid()}>{item.customerId}</div>
                </IgrListItem>
              </div>
            ))}
          </IgrList>
        </div>
        <div className={classes("column-layout group_1")}>
          <IgrSelect outlined={true} label="selected customer" value={varCustomer?.customerId} className={classes("select")}>
            {iGNorthwindAPICustomerDto?.map((item) => (
              <IgrSelectItem value={item.customerId} key={item.customerId}>
                <span key={uuid()}>{item.customerId}</span>
              </IgrSelectItem>
            ))}
          </IgrSelect>
          <IgrCombo outlined={true} label="Label/Placeholder" displayKey="customerId" singleSelect={true} className={classes("single-select-combo")}></IgrCombo>
          <div className={classes("column-layout group_2")}>
            <div style={{display: 'contents'}} onClick={() => dialog?.current?.toggle()}>
              <IgrAvatar shape="rounded" className={classes("avatar avatar_2")}></IgrAvatar>
            </div>
            <h4 className={classes("content")}>
              <span>{varCustomer?.customerId}</span>
            </h4>
            <h6 className={classes("content")}>
              <span>{varCustomer?.companyName}</span>
            </h6>
            <div className={classes("row-layout group_3")}>
              <p className={classes("typography__caption content")}>
                <span>{varCustomer?.address?.street}</span>
              </p>
              <p className={classes("typography__caption content")}>
                <span>{varCustomer?.address?.city}</span>
              </p>
              <p className={classes("typography__caption content")}>
                <span>{varCustomer?.address?.country}</span>
              </p>
            </div>
          </div>
          <IgrGrid data={iGNorthwindAPIOrderDto} primaryKey="orderId" rowSelection="single" hideRowSelectors={true} allowFiltering={true} filterMode="excelStyleFilter" rowSelectionChanging={(_c, e) => setVarOrderID1(e.detail.newSelection[0].orderId)} className={classes("ig-typography ig-scrollbar grid")}>
            <IgrColumn field="orderId" dataType="number" header="orderId" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="customerId" dataType="string" header="customerId" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="employeeId" dataType="number" header="employeeId" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="shipperId" dataType="number" header="shipperId" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="orderDate" dataType="date" header="orderDate" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="requiredDate" dataType="date" header="requiredDate" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="shipVia" dataType="string" header="shipVia" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="freight" dataType="number" header="freight" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="shipName" dataType="string" header="shipName" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="completed" dataType="boolean" header="completed" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="shipAddress.street" dataType="string" header="shipAddress street" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="shipAddress.city" dataType="string" header="shipAddress city" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="shipAddress.region" dataType="string" header="shipAddress region" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="shipAddress.postalCode" dataType="string" header="shipAddress postalCode" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="shipAddress.country" dataType="string" header="shipAddress country" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="shipAddress.phone" dataType="string" header="shipAddress phone" sortable={true} selectable={false}></IgrColumn>
          </IgrGrid>
          <IgrGrid data={iGNorthwindAPIOrderDetailDto} primaryKey="orderId" allowFiltering={true} filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid")}>
            <IgrColumn field="orderId" dataType="number" header="orderId" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="productId" dataType="number" header="productId" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="unitPrice" dataType="number" header="unitPrice" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="quantity" dataType="number" header="quantity" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="discount" dataType="number" header="discount" sortable={true} selectable={false}></IgrColumn>
          </IgrGrid>
        </div>
        <IgrDialog closeOnOutsideClick={true} ref={dialog}>
          <h5 slot="title" key={uuid()}>
            <span>Using variables in your app</span>
          </h5>
          <IgrList className={classes("list_1")} key={uuid()}>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar shape="circle" className={classes("avatar_1 avatar_1_1")} key={uuid()}>
                  <span className={classes("material-icons icon")} key={uuid()}>
                    <span key={uuid()}>looks_one</span>
                  </span>
                </IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Create variables</div>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar shape="circle" className={classes("avatar_1 avatar_1_2")} key={uuid()}>
                  <span className={classes("material-icons icon")} key={uuid()}>
                    <span key={uuid()}>looks_two</span>
                  </span>
                </IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Update variable value</div>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar shape="circle" className={classes("avatar_1 avatar_1_3")} key={uuid()}>
                  <span className={classes("material-icons icon")} key={uuid()}>
                    <span key={uuid()}>looks_3</span>
                  </span>
                </IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Variable in API request</div>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar shape="circle" className={classes("avatar_1 avatar_1_4")} key={uuid()}>
                  <span className={classes("material-icons icon")} key={uuid()}>
                    <span key={uuid()}>looks_4</span>
                  </span>
                </IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Bind component property to variable</div>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar shape="circle" className={classes("avatar_1 avatar_1_5")} key={uuid()}>
                  <span className={classes("material-icons icon")} key={uuid()}>
                    <span key={uuid()}>looks_5</span>
                  </span>
                </IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Manage variables</div>
            </IgrListItem>
          </IgrList>
          <div slot="footer" key={uuid()}>
            <IgrButton type="button" onClick={() => dialog?.current?.toggle()} className={classes("button")} key={uuid()}>
              <span key={uuid()}>OK. Got it!</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
          </div>
        </IgrDialog>
      </div>
    </>
  );
}
