import { IgrButton, IgrButtonModule, IgrCheckbox, IgrCheckboxModule, IgrInput, IgrInputModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import styles from './login-page.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

IgrButtonModule.register();
IgrCheckboxModule.register();
IgrInputModule.register();
IgrRippleModule.register();

export default function LoginPage() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();

  return (
    <>
      <div className={classes("row-layout login-page-container")}>
        <div className={classes("row-layout row-layout-1")}>
          <div className={classes("column-layout column-layout_1")}>
            <h5 className={classes("title")}>
              <span>Sign in</span>
            </h5>
            <IgrInput label="Username" outlined={false} className={classes("input-group-1")}></IgrInput>
            <IgrInput type="password" label="Password" outlined={false} className={classes("input-group")}></IgrInput>
            <div className={classes("row-layout row-layout_1")}>
              <IgrCheckbox labelPosition="after" className={classes("checkbox")}>
                <span key={uuid()}>Remember me</span>
              </IgrCheckbox>
              <a href="" className={classes("typography__body-1 hyperlink")}>
                <span>Forgot password?</span>
              </a>
            </div>
            <IgrButton type="button" className={classes("button")}>
              <span key={uuid()}>Sign in</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="outlined" type="button" className={classes("button-1")}>
              <span key={uuid()}>Create a new account</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <p className={classes("typography__caption text")}>
              <span>By signing in, you are agreeing to our terms of use and privacy policy</span>
            </p>
          </div>
        </div>
        <div className={classes("row-layout group")}>
          <img className={classes("image")} />
        </div>
      </div>
    </>
  );
}
