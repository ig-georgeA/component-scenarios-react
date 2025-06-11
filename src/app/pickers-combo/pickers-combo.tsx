import { IgrCombo, IgrComboModule, IgrDatePicker, IgrDatePickerModule, IgrSelect, IgrSelectItem, IgrSelectModule } from '@infragistics/igniteui-react';
import { useState } from 'react';
import { useGetCustomerDtoList, useGetEmployeeDtoList } from '../hooks/ignorthwind-api-hooks';
import styles from './pickers-combo.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

IgrComboModule.register();
IgrDatePickerModule.register();
IgrSelectModule.register();

export default function PickersCombo() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const [value, setValue] = useState<string | undefined>('2');
  const [value1, setValue1] = useState<string | undefined>('3');
  const { iGNorthwindAPIEmployeeDto } = useGetEmployeeDtoList();
  const { iGNorthwindAPICustomerDto } = useGetCustomerDtoList();

  return (
    <>
      <div className={classes("row-layout pickers-combo-container")}>
        <div className={classes("row-layout group")}>
          <div className={classes("column-layout group_1")}>
            <p className={classes("typography__subtitle-1 text")}>
              <span>Select</span>
            </p>
            <IgrSelect outlined={true} label="Employees" placeholder="Select a value" value={value} change={(_c, e) => setValue(e.detail.value)} className={classes("user-input")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>person</span>
                </span>
              </span>
              {iGNorthwindAPIEmployeeDto?.map((item) => (
                <IgrSelectItem value="Option" key={uuid()}>
                  <span key={uuid()}>{item.lastName}</span>
                </IgrSelectItem>
              ))}
            </IgrSelect>
            <IgrSelect outlined={false} label="Label/Placeholder" placeholder="pick a value" className={classes("user-input")}>
              <IgrSelectItem value="Option" key="7a221a48-503e-4c57-99d8-faaedbb9797e">
                <span key={uuid()}>Option</span>
              </IgrSelectItem>
            </IgrSelect>
            <IgrSelect outlined={true} label="Label/Placeholder" placeholder="pick a value" value={value1} change={(_c, e) => setValue1(e.detail.value)} className={classes("user-input")}>
              <IgrSelectItem value="1" key="a0bf262c-5155-4e23-8525-9cdc8a3a9fb1">
                <span key={uuid()}>Android</span>
              </IgrSelectItem>
              <IgrSelectItem value="2" key="148ea823-90b3-4260-8503-d2d6b9c2065b">
                <span key={uuid()}>iOS</span>
              </IgrSelectItem>
              <IgrSelectItem value="3" key="e0f30dce-7db8-4152-9733-b14c90cfcb01">
                <span key={uuid()}>Web</span>
              </IgrSelectItem>
            </IgrSelect>
            <IgrSelect outlined={true} label="Options" placeholder="Select a value" className={classes("user-input")}>
              <span slot="suffix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>date_range</span>
                </span>
              </span>
              <IgrSelectItem value="Option" key="b08e41a7-bbd9-48ec-a646-5c1566feed42">
                <span key={uuid()}>Option</span>
              </IgrSelectItem>
              <IgrSelectItem value="Option" key="fe343f5f-4dca-47c5-a4f8-5cc926805237">
                <span key={uuid()}>Option</span>
              </IgrSelectItem>
              <IgrSelectItem value="Option" key="b705f449-a3f3-4b54-96a8-e9827ea5f36a">
                <span key={uuid()}>Option</span>
              </IgrSelectItem>
              <span slot="helper-text" key={uuid()}>Show help text here</span>
            </IgrSelect>
            <IgrSelect outlined={false} label="I have a label" disabled className={classes("user-input")}>
              <span slot="helper-text" key={uuid()}>disabled</span>
            </IgrSelect>
          </div>
          <div className={classes("column-layout group_1")}>
            <p className={classes("typography__subtitle-1 text")}>
              <span>Combo</span>
            </p>
            <IgrCombo outlined={true} data={iGNorthwindAPICustomerDto} label="Categories" placeholder="no label + placeholder + multi_select" displayKey="customerId" className={classes("user-input")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>person</span>
                </span>
              </span>
              <span slot="helper-text" key={uuid()}>sample hint text</span>
            </IgrCombo>
            <IgrCombo outlined={true} data={iGNorthwindAPICustomerDto} label="Label/Placeholder" placeholder="simple combo" displayKey="companyName" singleSelect={true} className={classes("user-input")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>person</span>
                </span>
              </span>
            </IgrCombo>
            <IgrCombo outlined={true} data={iGNorthwindAPICustomerDto} label="Description" placeholder="disabled combo" disabled displayKey="customerId" className={classes("user-input")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>person</span>
                </span>
              </span>
              <span slot="suffix" key={uuid()}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>warning</span>
                </span>
              </span>
            </IgrCombo>
            <IgrCombo data={iGNorthwindAPIEmployeeDto} label="Names" placeholder="Box-style combo" displayKey="lastName" required outlined={false} singleSelect={true} className={classes("user-input")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>person</span>
                </span>
              </span>
            </IgrCombo>
            <IgrCombo data={iGNorthwindAPIEmployeeDto} placeholder="Box-style combo + disabled" disabled displayKey="lastName" required outlined={false} singleSelect={true} className={classes("user-input")}></IgrCombo>
            <div className={classes("group_2")}>
              <IgrDatePicker label="Date" outlined={false} mode="dialog"></IgrDatePicker>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
