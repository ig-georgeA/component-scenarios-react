import { IgrBanner, IgrBannerModule, IgrButton, IgrButtonModule, IgrDialog, IgrDialogModule, IgrDropdown, IgrDropdownHeader, IgrDropdownHeaderModule, IgrDropdownItem, IgrDropdownItemModule, IgrDropdownModule, IgrIconButton, IgrIconButtonModule, IgrInput, IgrInputModule, IgrRipple, IgrRippleModule, IgrSnackbar, IgrSnackbarModule } from '@infragistics/igniteui-react';
import { useRef } from 'react';
import styles from './dialogs-and-dropdowns.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

IgrBannerModule.register();
IgrButtonModule.register();
IgrDialogModule.register();
IgrDropdownHeaderModule.register();
IgrDropdownItemModule.register();
IgrDropdownModule.register();
IgrIconButtonModule.register();
IgrInputModule.register();
IgrRippleModule.register();
IgrSnackbarModule.register();

export default function DialogsAndDropdowns() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const alert = useRef<IgrDialog>(null);
  const confirm = useRef<IgrDialog>(null);
  const customContentDialog = useRef<IgrDialog>(null);
  const bannerInline = useRef<IgrBanner>(null);
  const dropdown = useRef<IgrDropdown>(null);
  const bannerDemo = useRef<IgrBanner>(null);
  const snackbar = useRef<IgrSnackbar>(null);
  const bannerInside = useRef<IgrBanner>(null);
  const bannerOutside = useRef<IgrBanner>(null);
  const dropdown1 = useRef<IgrDropdown>(null);

  return (
    <>
      <div className={classes("column-layout dialogs-and-dropdowns-container")}>
        <div className={classes("row-layout group")}>
          <div className={classes("column-layout group_1")}>
            <IgrButton type="button" onClick={() => alert?.current?.toggle()} className={classes("button")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>open_in_new</span>
              </span>
              <span key={uuid()}>Open alert dialog</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton type="button" onClick={() => confirm?.current?.toggle()} className={classes("button")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>open_in_new</span>
              </span>
              <span key={uuid()}>Open confirmation dialog</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
          </div>
          <div className={classes("row-layout group_2")}>
            <IgrButton type="button" className={classes("button_1")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>open_in_new</span>
              </span>
              <span key={uuid()}>Open custom dialog</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrDialog closeOnOutsideClick={true} ref={customContentDialog}>
              <h5 slot="title" key={uuid()}>
                <span>Dialog with custom content</span>
              </h5>
              <div className={classes("row-layout custom-header")} key={uuid()}>
                <h4 className={classes("content")}>
                  <span>My custom title</span>
                </h4>
                <div style={{display: 'contents'}} onClick={() => customContentDialog?.current?.toggle()}>
                  <IgrIconButton className={classes("icon-button")}>
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>close</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
              </div>
              <div className={classes("column-layout custom-content")} key={uuid()}>
                <IgrBanner ref={bannerInline} className={classes("banner-inline")}>
                  <p key={uuid()}>
                    <span>Email is required!</span>
                  </p>
                  <div slot="footer" key={uuid()}>
                    <IgrButton variant="flat" type="button" onClick={() => bannerInline?.current?.toggle()} className={classes("button")} key={uuid()}>
                      <span key={uuid()}>Dismiss</span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrButton>
                  </div>
                  <span className={classes("material-icons icon")} key={uuid()}>
                    <span key={uuid()}>report</span>
                  </span>
                </IgrBanner>
                <img src="/src/assets/SketchParser.png" className={classes("image")} />
                <p className={classes("typography__body-1 content")}>
                  <span>Use the Ignite UI Dialog Window component to display messages or present forms for users to fill out. The component opens a dialog window centered on top of app content. You can also provide a standard alert message that users can cancel.</span>
                </p>
                <div className={classes("column-layout form-fields")}>
                  <IgrInput label="Email" required outlined={true} className={classes("input")}>
                    <p slot="value-missing" key={uuid()}>This field is required</p>
                  </IgrInput>
                  <IgrInput label="Name" outlined={true} className={classes("input")}></IgrInput>
                  <div className={classes("row-layout custom-actions")}>
                    <IgrButton variant="flat" type="button" onClick={(e: any) => dropdown?.current?.toggleTarget(e.target || e.i.nativeElement)} className={classes("button_1")}>
                      <span key={uuid()}>Options</span>
                      <span className={classes("material-icons")} key={uuid()}>
                        <span key={uuid()}>keyboard_arrow_down</span>
                      </span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrButton>
                    <div className={classes("row-layout group_3")}>
                      <IgrButton variant="outlined" type="button" onClick={() => customContentDialog?.current?.toggle()} className={classes("button_1")}>
                        <span key={uuid()}>Cancel</span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrButton>
                      <IgrButton type="button" onClick={() => customContentDialog?.current?.toggle()} className={classes("button_1")}>
                        <span key={uuid()}>Custom save</span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrButton>
                    </div>
                    <IgrDropdown ref={dropdown} className={classes("dropdown dropdown_2")}>
                      <IgrDropdownItem key={uuid()}>
                        <span key={uuid()}>Option</span>
                      </IgrDropdownItem>
                      <IgrDropdownItem key={uuid()}>
                        <span key={uuid()}>Option</span>
                      </IgrDropdownItem>
                      <IgrDropdownItem key={uuid()}>
                        <span key={uuid()}>Option</span>
                      </IgrDropdownItem>
                      <IgrDropdownItem key={uuid()}>
                        <span key={uuid()}>Option</span>
                      </IgrDropdownItem>
                    </IgrDropdown>
                  </div>
                </div>
              </div>
              <div slot="footer" key={uuid()}>
                <IgrButton variant="flat" type="button" onClick={() => customContentDialog?.current?.toggle()} className={classes("button")} key={uuid()}>
                  <span key={uuid()}>Close</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
                <IgrButton type="button" onClick={() => bannerInline?.current?.toggle()} className={classes("button")} key={uuid()}>
                  <span key={uuid()}>Save</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
            </IgrDialog>
          </div>
          <div className={classes("column-layout group_4")}>
            <h3 className={classes("h3")}>
              <span>Demo zone</span>
            </h3>
            <IgrBanner className={classes("banner-inline")}>
              <p key={uuid()}>
                <span>Banner message</span>
              </p>
              <div slot="footer" key={uuid()}>
                <IgrButton variant="flat" type="button" className={classes("button")} key={uuid()}>
                  <span key={uuid()}>Button</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
              <span className={classes("material-icons icon_1")} key={uuid()}>
                <span key={uuid()}>mail</span>
              </span>
            </IgrBanner>
            <IgrBanner ref={bannerDemo} className={classes("banner-inline")}>
              <p key={uuid()}>
                <span>Webinar demo</span>
              </p>
              <div slot="footer" key={uuid()}>
                <IgrButton variant="flat" type="button" onClick={() => bannerDemo?.current?.toggle()} className={classes("button")} key={uuid()}>
                  <span key={uuid()}>Dismiss</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>account_balance</span>
              </span>
            </IgrBanner>
          </div>
        </div>
        <div className={classes("row-layout group")}>
          <div className={classes("row-layout group_5")}>
            <IgrButton type="button" onClick={() => snackbar?.current?.toggle()} className={classes("button_1")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>open_in_new</span>
              </span>
              <span key={uuid()}>Open snackbar</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
          </div>
          <div className={classes("column-layout group_6")}>
            <IgrBanner ref={bannerInside} className={classes("banner-inside")}>
              <p key={uuid()}>
                <span>This is important! Can you make some room?</span>
              </p>
              <div slot="footer" key={uuid()}>
                <IgrButton variant="flat" type="button" onClick={() => bannerInside?.current?.toggle()} className={classes("button")} key={uuid()}>
                  <span key={uuid()}>Dismiss</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
              <span className={classes("material-icons icon_2")} key={uuid()}>
                <span key={uuid()}>waving_hand</span>
              </span>
            </IgrBanner>
            <div className={classes("column-layout group_7")}>
              <IgrButton type="button" onClick={() => bannerInside?.current?.toggle()} className={classes("button")}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>open_in_new</span>
                </span>
                <span key={uuid()}>Open banner (inside)</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
              <IgrButton type="button" onClick={() => bannerOutside?.current?.toggle()} className={classes("button")}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>open_in_new</span>
                </span>
                <span key={uuid()}>Open banner (outside)</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
            </div>
          </div>
          <div className={classes("row-layout group_8")}>
            <IgrButton type="button" onClick={(e: any) => dropdown1?.current?.toggleTarget(e.target || e.i.nativeElement)} className={classes("button_1")}>
              <span key={uuid()}>More options</span>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>expand_more</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton type="button" onClick={(e: any) => dropdown1?.current?.toggleTarget(e.target || e.i.nativeElement)} className={classes("button_1")}>
              <span key={uuid()}>Button</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrDropdown ref={dropdown1} className={classes("dropdown_1 dropdown_1_1")}>
              <IgrDropdownHeader key={uuid()}>
                <span key={uuid()}>Header 1</span>
              </IgrDropdownHeader>
              <IgrDropdownItem key={uuid()}>
                <span slot="prefix" key={uuid()}>
                  <span className={classes("material-icons icon_1")} key={uuid()}>
                    <span key={uuid()}>content_cut</span>
                  </span>
                </span>
                <span slot="suffix" key={uuid()}>
                  <p className={classes("typography__caption text")} key={uuid()}>
                    <span>Cmd + X</span>
                  </p>
                </span>
                <span key={uuid()}>Cut</span>
              </IgrDropdownItem>
              <IgrDropdownItem key={uuid()}>
                <span slot="prefix" key={uuid()}>
                  <span className={classes("material-icons icon_1")} key={uuid()}>
                    <span key={uuid()}>content_copy</span>
                  </span>
                </span>
                <span slot="suffix" key={uuid()}>
                  <p className={classes("typography__caption text")} key={uuid()}>
                    <span>Cmd + C</span>
                  </p>
                </span>
                <span key={uuid()}>Copy </span>
              </IgrDropdownItem>
              <IgrDropdownItem key={uuid()}>
                <span slot="prefix" key={uuid()}>
                  <span className={classes("material-icons icon_1")} key={uuid()}>
                    <span key={uuid()}>content_paste</span>
                  </span>
                </span>
                <span slot="suffix" key={uuid()}>
                  <p className={classes("typography__caption text")} key={uuid()}>
                    <span>Cmd + V</span>
                  </p>
                </span>
                <span key={uuid()}>Paste</span>
              </IgrDropdownItem>
              <IgrDropdownHeader key={uuid()}>
                <span key={uuid()}>Header 2</span>
              </IgrDropdownHeader>
              <IgrDropdownItem key={uuid()}>
                <span slot="prefix" key={uuid()}></span>
                <span key={uuid()}>Option 2.1</span>
              </IgrDropdownItem>
              <IgrDropdownItem key={uuid()}>
                <span key={uuid()}>Option 2.2</span>
              </IgrDropdownItem>
            </IgrDropdown>
          </div>
        </div>
        <IgrDialog closeOnOutsideClick={true} ref={alert}>
          <p key={uuid()}>In this accelerator, we'll show you how to use various controls for alerts, pop-up messages, data entry screens, and more in App Builder.</p>
          <div slot="footer" key={uuid()}>
            <IgrButton variant="flat" onClick={() => alert?.current?.toggle()} key={uuid()}>
              <span key={uuid()}>Cancel</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="flat" onClick={() => alert?.current?.toggle()} key={uuid()}>
              <span key={uuid()}>OK</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
          </div>
        </IgrDialog>
        <IgrDialog closeOnOutsideClick={true} ref={confirm}>
          <h5 slot="title" key={uuid()}>
            <span>Show custom dialog?</span>
          </h5>
          <p key={uuid()}>In this accelerator, we'll show you how to use various controls for alerts, pop-up messages, data entry screens, and more in App Builder.</p>
          <div slot="footer" key={uuid()}>
            <IgrButton variant="flat" onClick={() => confirm?.current?.toggle()} key={uuid()}>
              <span key={uuid()}>Cancel</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
          </div>
        </IgrDialog>
        <IgrBanner ref={bannerOutside} className={classes("banner-inline")}>
          <p key={uuid()}>
            <span>This is important! Can you make some room?</span>
          </p>
          <div slot="footer" key={uuid()}>
            <IgrButton variant="flat" type="button" onClick={() => bannerOutside?.current?.toggle()} className={classes("button")} key={uuid()}>
              <span key={uuid()}>More details</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="flat" type="button" onClick={() => bannerOutside?.current?.toggle()} className={classes("button")} key={uuid()}>
              <span key={uuid()}>Dismiss</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
          </div>
          <span className={classes("material-icons icon_3")} key={uuid()}>
            <span key={uuid()}>error</span>
          </span>
        </IgrBanner>
        <IgrSnackbar className={classes("snackbar-webinar")}>
          <span key={uuid()}>Webinar demo</span>
        </IgrSnackbar>
        <IgrSnackbar actionText="OK. Got it!" action={() => snackbar?.current?.toggle()} ref={snackbar} className={classes("snackbar")}>
          <span key={uuid()}>Read quickly. I'll disappear in 4s!</span>
        </IgrSnackbar>
      </div>
    </>
  );
}
