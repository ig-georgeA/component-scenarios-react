import { IgrAvatar, IgrAvatarModule, IgrBadge, IgrBadgeModule, IgrButton, IgrButtonGroup, IgrButtonGroupModule, IgrButtonModule, IgrCheckbox, IgrCheckboxModule, IgrChip, IgrChipModule, IgrDatePicker, IgrDatePickerModule, IgrDateTimeInput, IgrDateTimeInputModule, IgrIconButton, IgrIconButtonModule, IgrInput, IgrInputModule, IgrRadio, IgrRadioGroup, IgrRadioGroupModule, IgrRadioModule, IgrRangeSlider, IgrRangeSliderModule, IgrRating, IgrRatingModule, IgrRipple, IgrRippleModule, IgrSlider, IgrSliderModule, IgrSwitch, IgrSwitchModule, IgrTextarea, IgrTextareaModule, IgrToggleButton, IgrToggleButtonModule } from '@infragistics/igniteui-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useGetCategories } from '../hooks/northwind-hooks';
import styles from './inputs.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

IgrAvatarModule.register();
IgrBadgeModule.register();
IgrButtonGroupModule.register();
IgrButtonModule.register();
IgrCheckboxModule.register();
IgrChipModule.register();
IgrDatePickerModule.register();
IgrDateTimeInputModule.register();
IgrIconButtonModule.register();
IgrInputModule.register();
IgrRadioGroupModule.register();
IgrRadioModule.register();
IgrRangeSliderModule.register();
IgrRatingModule.register();
IgrRippleModule.register();
IgrSliderModule.register();
IgrSwitchModule.register();
IgrTextareaModule.register();
IgrToggleButtonModule.register();

export default function Inputs() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();
  const [value, setValue] = useState<Date | undefined>(new Date('2021-03-16T00:00'));
  const [value1, setValue1] = useState<Date | undefined>(new Date('2021-03-16T00:00'));
  const [value2, setValue2] = useState<number | undefined>(50);
  const [value3, setValue3] = useState<number | undefined>(25);
  const [value4, setValue4] = useState<number | undefined>(50);
  const [value5, setValue5] = useState<number | undefined>(0);
  const [value6, setValue6] = useState<number | undefined>(3);
  const [value7, setValue7] = useState<string | undefined>('some content');
  const [value8, setValue8] = useState<Date | undefined>(new Date('2024-06-12T00:00'));
  const [value9, setValue9] = useState<Date | undefined>(new Date('2021-03-16T00:00'));
  const [value10, setValue10] = useState<Date | undefined>(new Date('2021-03-16T00:00'));
  const [checked, setChecked] = useState<any | undefined>(true);
  const [checked1, setChecked1] = useState<any | undefined>(true);
  const [checked2, setChecked2] = useState<any | undefined>(true);
  const [checked3, setChecked3] = useState<any | undefined>(true);
  const [checked4, setChecked4] = useState<any | undefined>(true);
  const [value11, setValue11] = useState<any | undefined>(1);
  const [value12, setValue12] = useState<any | undefined>(1);
  const [value13, setValue13] = useState<string | undefined>('some content');
  const { northwindCategories } = useGetCategories();

  return (
    <>
      <div className={classes("row-layout inputs-container")}>
        <div className={classes("column-layout column-layout_1")}>
          <IgrInput type="email" label="Email address" outlined={false} className={classes("input")}>
            <span slot="prefix" key={uuid()}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>mail</span>
              </span>
            </span>
          </IgrInput>
          <IgrInput label="I'm disabled" disabled outlined={false} className={classes("input_1")}></IgrInput>
          <IgrInput label="Label +prefix+box+help" outlined={false} className={classes("input")}>
            <span slot="prefix" key={uuid()}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>person</span>
              </span>
            </span>
            <span slot="helper-text" key={uuid()}>sample hint text</span>
          </IgrInput>
          <IgrInput label="Label" placeholder="Label/Placeholder" outlined={false} className={classes("input_1")}></IgrInput>
          <IgrDateTimeInput label="Date-box style-input format 1" outlined="false" inputFormat="MM/dd/yyyy" displayFormat="longDate" Min="2021-03-01T00:00" Max="2021-03-27T00:00" spinLoop={true} value={value} change={(_c, e) => setValue(e.detail)} className={classes("date-time-input")}></IgrDateTimeInput>
          <IgrDateTimeInput label="Date-box style - input format 2" outlined="false" inputFormat="dd/MM/yyyy" displayFormat="longDate" Min="2021-03-01T00:00" Max="2021-03-27T00:00" spinLoop={true} value={value1} change={(_c, e) => setValue1(e.detail)} className={classes("date-time-input")}></IgrDateTimeInput>
          <IgrTextarea placeholder="Type here" required outlined={false} className={classes("textarea")}></IgrTextarea>
          <div className={classes("group")}>
            <IgrDatePicker label="Date picker" outlined={false} mode="dialog"></IgrDatePicker>
          </div>
          <div className={classes("row-layout group_1")}>
            <IgrChip className={classes("chip")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>place</span>
                </span>
              </span>
              <span key={uuid()}>Country</span>
            </IgrChip>
            <IgrChip className={classes("chip")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>place</span>
                </span>
              </span>
              <span key={uuid()}>Country</span>
            </IgrChip>
            <IgrChip className={classes("chip_1")}>
              <span slot="prefix" key={uuid()}>
                <IgrAvatar shape="circle" className={classes("avatar")} key={uuid()}>
                  <span className={classes("material-icons icon_2")} key={uuid()}>
                    <span key={uuid()}>people</span>
                  </span>
                </IgrAvatar>
              </span>
              <span slot="suffix" key={uuid()}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>clear</span>
                </span>
              </span>
              <span key={uuid()}>Country</span>
            </IgrChip>
            <IgrChip disabled className={classes("chip_1")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>account_balance</span>
                </span>
              </span>
              <span slot="suffix" key={uuid()}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>clear</span>
                </span>
              </span>
              <span key={uuid()}>Country</span>
            </IgrChip>
          </div>
          <div className={classes("row-layout group_2")}>
            <IgrChip className={classes("chip_2")}>
              <span slot="prefix" key={uuid()}>
                <IgrAvatar initials="AB" shape="circle" className={classes("avatar_4")} key={uuid()}></IgrAvatar>
              </span>
              <span key={uuid()}>Country</span>
            </IgrChip>
          </div>
          <div className={classes("column-layout group_3")}>
            <IgrSlider min={0} max={100} value={value2} change={(_c, e) => setValue2(e.detail)} className={classes("slider")}></IgrSlider>
            <IgrRangeSlider lower={20} upper={80} MinValue={0} MaxValue={100} step={10} discreteTrack="true" className={classes("range-slider")}></IgrRangeSlider>
            <IgrSlider disabled min={0} max={100} primaryTicks={3} secondaryTicks={2} hideSecondaryLabels={false} value={value3} change={(_c, e) => setValue3(e.detail)} className={classes("slider")}></IgrSlider>
            <IgrSlider min={0} max={100} step={10} primaryTicks={5} discreteTrack={true} value={value4} change={(_c, e) => setValue4(e.detail)} className={classes("slider_1")}></IgrSlider>
            <IgrSlider min={0} max={100} step={10} primaryTicks={3} secondaryTicks={1} tickOrientation="mirror" discreteTrack={true} value={value5} change={(_c, e) => setValue5(e.detail)} className={classes("slider")}></IgrSlider>
          </div>
          <div className={classes("row-layout group_4")}>
            <IgrAvatar initials="GM" shape="circle" className={classes("avatar_1 avatar_1_1")}></IgrAvatar>
            <IgrAvatar src="/src/assets/Avatar2.png" className={classes("avatar_2 avatar_2_1")}></IgrAvatar>
            <IgrAvatar shape="circle" className={classes("avatar_3")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>people</span>
              </span>
            </IgrAvatar>
          </div>
          <div className={classes("row-layout group_5")}>
            <span className={classes("material-icons icon_1")}>
              <span key={uuid()}>person</span>
            </span>
            <span className={classes("material-icons icon_3")}>
              <span key={uuid()}>person</span>
            </span>
            <span className={classes("material-icons icon_4")}>
              <span key={uuid()}>person</span>
            </span>
            <span className={classes("material-icons icon_5")}>
              <span key={uuid()}>person</span>
            </span>
            <IgrRating step={0.1} hoverPreview={true} value={value6} change={(_c, e) => setValue6(e.detail)} className={classes("rating")}></IgrRating>
          </div>
        </div>
        <div className={classes("column-layout group_6")}>
          <IgrInput label="Label" placeholder="Label + prefix + suffix + border" outlined={true} className={classes("input")}>
            <span slot="prefix" key={uuid()}>
              <p className={classes("typography__body-2 text")} key={uuid()}>
                <span>https://</span>
              </p>
            </span>
            <span slot="suffix" key={uuid()}>
              <p className={classes("typography__body-2 text")} key={uuid()}>
                <span>.com</span>
              </p>
            </span>
          </IgrInput>
          <IgrInput label="Label + required" required outlined={true} value={value7} change={(_c, e) => setValue7(e.detail)} className={classes("input_1")}>
            <p slot="value-missing" key={uuid()}>This field is required</p>
          </IgrInput>
          <IgrInput label="I'm disabled" disabled outlined={true} className={classes("input_1")}></IgrInput>
          <IgrInput type="email" label="Email address" required outlined={true} className={classes("input_1")}>
            <p slot="value-missing" key={uuid()}>This field is required</p>
          </IgrInput>
          <IgrInput label="Prefix, helptext and border" outlined={true} className={classes("input")}>
            <span slot="prefix" key={uuid()}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>person</span>
              </span>
            </span>
            <span slot="helper-text" key={uuid()}>sample hint text</span>
          </IgrInput>
          <div className={classes("group")}>
            <IgrDatePicker label="Date picker" outlined={true} mode="dialog"></IgrDatePicker>
          </div>
          <div className={classes("group_7")}>
            <IgrDatePicker label="Date picker 2" outlined={true} mode="dialog" value={value8} change={(_c, e) => setValue8(new Date(e.detail))}></IgrDatePicker>
          </div>
          <IgrDateTimeInput label="Date editor" outlined="true" inputFormat="MM/dd/yyyy" displayFormat="mediumDate" Min="2021-03-01T00:00" Max="2021-03-27T00:00" spinLoop={true} value={value9} change={(_c, e) => setValue9(e.detail)} className={classes("date-time-input")}></IgrDateTimeInput>
          <IgrDateTimeInput label="Time editor" outlined="true" inputFormat="dd/MM/yyyy" displayFormat="shortTime" Min="2021-03-01T00:00" Max="2021-03-27T00:00" spinLoop={true} value={value10} change={(_c, e) => setValue10(e.detail)} className={classes("date-time-input_1")}></IgrDateTimeInput>
          <div className={classes("row-layout group_8")}>
            <IgrButton type="button" onClick={() => navigate(`/lists-data`)} className={classes("button")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>star</span>
              </span>
              <span key={uuid()}>Lists</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="outlined" type="button" className={classes("button")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>add</span>
              </span>
              <span key={uuid()}>Button</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="flat" type="button" className={classes("button")}>
              <span key={uuid()}>Button</span>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>add</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrIconButton className={classes("icon-button")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>edit_calendar</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
            <IgrButton disabled type="button" className={classes("button")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>add</span>
              </span>
              <span key={uuid()}>Button</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="outlined" disabled type="button" className={classes("button")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>add</span>
              </span>
              <span key={uuid()}>Button</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="flat" disabled type="button" className={classes("button")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>add</span>
              </span>
              <span key={uuid()}>Button</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrIconButton className={classes("icon-button_1")}>
              <span className={classes("material-icons icon_6")} key={uuid()}>
                <span key={uuid()}>edit_calendar</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
            <IgrButton variant="fab" className={classes("user-input")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>add</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <div className={classes("row-layout group_9")}>
              <div className={classes("row-layout group_10")}>
                <IgrIconButton>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>email</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
                <IgrBadge variant="success" className={classes("badge")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>check</span>
                  </span>
                </IgrBadge>
              </div>
              <div className={classes("row-layout group_10")}>
                <IgrAvatar src="/src/assets/Avatar2.png" shape="circle" className={classes("avatar_3 avatar_3_1")}></IgrAvatar>
                <IgrBadge variant="warning" className={classes("badge_1")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>thumb_up</span>
                  </span>
                </IgrBadge>
              </div>
              <div className={classes("row-layout group_10")}>
                <span className={classes("material-icons icon_3")}>
                  <span key={uuid()}>mail</span>
                </span>
                <IgrBadge variant="danger" className={classes("badge")}>
                  <span key={uuid()}>999</span>
                </IgrBadge>
              </div>
              <div className={classes("row-layout group_10")}>
                <span className={classes("material-icons icon_3")}>
                  <span key={uuid()}>notifications</span>
                </span>
                <IgrBadge variant="danger" className={classes("badge_2")}></IgrBadge>
              </div>
              <IgrBadge variant="success" className={classes("badge_3")}>
                <span key={uuid()}>Accepted</span>
              </IgrBadge>
              <IgrBadge variant="danger" className={classes("badge_3")}>
                <span key={uuid()}>Denied</span>
              </IgrBadge>
              <div className={classes("row-layout group_10")}>
                <IgrIconButton>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>email</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
                <IgrBadge variant="danger" className={classes("badge_4")}></IgrBadge>
              </div>
            </div>
            <a href="https://www.youtube.com/playlist?list=PLZ4rRHIJepBuKeP2WqXZUtG8LAYmyHHsa" className={classes("typography__body-1 hyperlink")}>
              <span>YouTube playlist</span>
            </a>
          </div>
          <div className={classes("column-layout group_11")}>
            <div className={classes("row-layout group_12")}>
              <IgrButtonGroup className={classes("button-group")}>
                <IgrToggleButton key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>format_align_left</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrToggleButton>
                <IgrToggleButton key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>format_align_center</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrToggleButton>
                <IgrToggleButton key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>format_align_right</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrToggleButton>
              </IgrButtonGroup>
              <IgrButtonGroup className={classes("button-group")}>
                <IgrToggleButton key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>format_bold</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrToggleButton>
                <IgrToggleButton disabled key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>format_italic</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrToggleButton>
                <IgrToggleButton disabled key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>format_underlined</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrToggleButton>
              </IgrButtonGroup>
              <IgrSwitch checked={checked} change={(_c, e) => setChecked(e.detail.checked)} className={classes("user-input_1")}>
                <span key={uuid()}>Notify me</span>
              </IgrSwitch>
              <IgrSwitch checked={checked1} change={(_c, e) => setChecked1(e.detail.checked)} className={classes("user-input_1")}></IgrSwitch>
            </div>
            <div className={classes("row-layout group_13")}>
              <IgrCheckbox checked={checked2} change={(_c, e) => setChecked2(e.detail.checked)} className={classes("checkbox")}></IgrCheckbox>
              <IgrCheckbox labelPosition="after" checked={checked3} change={(_c, e) => setChecked3(e.detail.checked)} className={classes("checkbox")}>
                <span key={uuid()}>Does it work?</span>
              </IgrCheckbox>
              <IgrCheckbox labelPosition="before" checked={checked4} change={(_c, e) => setChecked4(e.detail.checked)} className={classes("user-input")}>
                <span key={uuid()}>How about now?</span>
              </IgrCheckbox>
            </div>
          </div>
          <div className={classes("row-layout group_14")}>
            <IgrRadioGroup value={value11} change={(_c, e) => setValue11(e.detail.value)} className={classes("radio-group")}>
              <IgrRadio value="1" key="541ff2bc-4ce1-46cd-8f6f-886bf131a4d0">
                <span key={uuid()}>Label</span>
              </IgrRadio>
              <IgrRadio value="2" key="64f303ef-484d-4595-a011-b3124547d709">
                <span key={uuid()}>Label</span>
              </IgrRadio>
              <IgrRadio value="3" key="0f23161e-e302-4df0-bf2f-af23ed4e2c67">
                <span key={uuid()}>Label</span>
              </IgrRadio>
            </IgrRadioGroup>
            <IgrRadioGroup alignment="horizontal" value={value12} change={(_c, e) => setValue12(e.detail.value)} className={classes("user-input_1")}>
              {northwindCategories?.map(() => (
                <IgrRadio value="1" key={uuid()}>
                  <span key={uuid()}>Label</span>
                </IgrRadio>
              ))}
              <IgrRadio value="2" key="cfe4755e-f9a3-4d2d-b180-0e1bd706dbaf">
                <span key={uuid()}>Label</span>
              </IgrRadio>
              <IgrRadio value="3" key="9e609f6d-1460-4367-bfc3-bf551a09e320">
                <span key={uuid()}>Label</span>
              </IgrRadio>
            </IgrRadioGroup>
          </div>
          <div className={classes("row-layout group_15")}>
            <IgrInput label="Group name" required outlined={true} value={value13} change={(_c, e) => setValue13(e.detail)} className={classes("input_2")}>
              <p slot="value-missing" key={uuid()}>This field is required</p>
            </IgrInput>
            <IgrButton variant="outlined" type="button" className={classes("button_1")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>check</span>
              </span>
              <span key={uuid()}>Submit</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
          </div>
          <div className={classes("group")}>
            <IgrDatePicker label="Date" outlined={true} mode="dialog"></IgrDatePicker>
          </div>
        </div>
      </div>
    </>
  );
}
