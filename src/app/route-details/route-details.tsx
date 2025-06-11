import { IgrAvatar, IgrAvatarModule, IgrButton, IgrButtonModule, IgrCombo, IgrComboModule, IgrDialog, IgrDialogModule, IgrList, IgrListItem, IgrListModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import { IgrColumn, IgrGrid, IgrGridModule } from '@infragistics/igniteui-react-grids';
import { useNavigate, useParams } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useGetCustomerDto, useGetOrderDetailDtoList, useGetOrderDtoList } from '../hooks/ignorthwind-api-hooks';
import '@infragistics/igniteui-react-grids/grids/combined.js';
import styles from './route-details.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

IgrAvatarModule.register();
IgrButtonModule.register();
IgrComboModule.register();
IgrDialogModule.register();
IgrGridModule.register();
IgrListModule.register();
IgrRippleModule.register();

export default function RouteDetails() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();
  const routeParams = useParams();
  const rCustomerID = routeParams.rCustomerID ?? 'ALFKI';
  const dialog = useRef<IgrDialog>(null);
  const [varOrderID, setVarOrderID] = useState<number | undefined>();
  const { iGNorthwindAPICustomerDto: selectedCustomer1 } = useGetCustomerDto(rCustomerID);
  const { iGNorthwindAPIOrderDto } = useGetOrderDtoList(rCustomerID);
  const { iGNorthwindAPIOrderDetailDto } = useGetOrderDetailDtoList(varOrderID as any);

  return (
    <>
      <div className={classes("row-layout route-details-container")}>
        <div className={classes("column-layout group")}>
          <IgrCombo outlined={true} label="Select customer" displayKey="customerId" singleSelect={true} className={classes("single-select-combo")}></IgrCombo>
          <div className={classes("row-layout group_1")}>
            <a href="" onClick={() => navigate(`/dynamic-routing`)} className={classes("typography__body-1 hyperlink")}>
              <span>All customers</span>
            </a>
            <span className={classes("material-icons icon")}>
              <span key={uuid()}>keyboard_arrow_right</span>
            </span>
            <p className={classes("typography__body-1 text")}>
              <span>{selectedCustomer1?.customerId}</span>
            </p>
          </div>
          <div className={classes("column-layout group_2")}>
            <div style={{display: 'contents'}} onClick={() => dialog?.current?.toggle()}>
              <IgrAvatar shape="rounded" className={classes("avatar avatar_2")}></IgrAvatar>
            </div>
            <div className={classes("row-layout group_3")}>
              <h4 className={classes("h4")}>
                <span>{selectedCustomer1?.customerId}</span>
              </h4>
            </div>
            <h6 className={classes("content")}>
              <span>{selectedCustomer1?.companyName}</span>
            </h6>
            <div className={classes("row-layout group_4")}>
              <p className={classes("typography__caption content")}>
                <span>{selectedCustomer1?.address?.street}</span>
              </p>
              <p className={classes("typography__caption content")}>
                <span>{selectedCustomer1?.address?.city}</span>
              </p>
              <p className={classes("typography__caption content")}>
                <span>{selectedCustomer1?.address?.country}</span>
              </p>
            </div>
          </div>
          <IgrGrid data={iGNorthwindAPIOrderDto} primaryKey="orderId" rowSelection="single" allowFiltering={true} filterMode="excelStyleFilter" rowSelectionChanging={(_c, e) => setVarOrderID(e.detail.newSelection[0].orderId)} className={classes("ig-typography ig-scrollbar grid")}>
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
            <span>What will we cover today?</span>
          </h5>
          <IgrList className={classes("list")} key={uuid()}>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar shape="circle" className={classes("avatar_1 avatar_1_1")} key={uuid()}>
                  <span className={classes("material-icons icon_1")} key={uuid()}>
                    <span key={uuid()}>looks_one</span>
                  </span>
                </IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Create variables</div>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar shape="circle" className={classes("avatar_1 avatar_1_2")} key={uuid()}>
                  <span className={classes("material-icons icon_1")} key={uuid()}>
                    <span key={uuid()}>looks_two</span>
                  </span>
                </IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Update variable value</div>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar shape="circle" className={classes("avatar_1 avatar_1_3")} key={uuid()}>
                  <span className={classes("material-icons icon_1")} key={uuid()}>
                    <span key={uuid()}>looks_3</span>
                  </span>
                </IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Use variable in API request</div>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar shape="circle" className={classes("avatar_1 avatar_1_4")} key={uuid()}>
                  <span className={classes("material-icons icon_1")} key={uuid()}>
                    <span key={uuid()}>looks_4</span>
                  </span>
                </IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Bind component property to variable</div>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar shape="circle" className={classes("avatar_1 avatar_1_5")} key={uuid()}>
                  <span className={classes("material-icons icon_1")} key={uuid()}>
                    <span key={uuid()}>looks_5</span>
                  </span>
                </IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Manage variables</div>
            </IgrListItem>
          </IgrList>
          <div slot="footer" key={uuid()}>
            <IgrButton variant="outlined" type="button" onClick={() => dialog?.current?.toggle()} className={classes("button")} key={uuid()}>
              <span key={uuid()}>Let's get started!</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
          </div>
        </IgrDialog>
      </div>
    </>
  );
}
