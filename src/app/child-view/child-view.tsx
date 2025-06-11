import { IgrButton, IgrButtonModule, IgrCard, IgrCardActions, IgrCardContent, IgrCardHeader, IgrCardMedia, IgrCardModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import styles from './child-view.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

IgrButtonModule.register();
IgrCardModule.register();
IgrRippleModule.register();

export default function ChildView() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();

  return (
    <>
      <div className={classes("row-layout child-view-container")}>
        <IgrCard elevated={true} className={classes("card")}>
          <IgrCardMedia className={classes("media-content")} key={uuid()}>
            <img src="https://www.infragistics.com/angular-demos/assets/images/card/media/ROZES-Under-the-Grave.jpg" className={classes("image")} key={uuid()} />
          </IgrCardMedia>
          <IgrCardHeader key={uuid()}>
            <h3 slot="title" key={uuid()}>
              <span key={uuid()}>The is the card title</span>
            </h3>
            <h5 slot="subtitle" key={uuid()}>
              <span key={uuid()}></span>
            </h5>
          </IgrCardHeader>
          <IgrCardContent className={classes("body-content")} key={uuid()}>
            <div className={classes("column-layout group")} key={uuid()}>
              <p className={classes("typography__body-2 text")}>
                <span>Researching a topic effectively involves a multifaceted approach, moving beyond a simple search to a more systematic exploration of information. Here's a breakdown of different ways to research a topic, from defining your focus to utilizing various resources and methods:</span>
              </p>
              <IgrButton type="button" className={classes("button")}>
                <span key={uuid()}>Button</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
            </div>
          </IgrCardContent>
        </IgrCard>
        <IgrCard elevated={true} className={classes("card-1")}>
          <IgrCardMedia className={classes("media-content")} key={uuid()}>
            <img src="https://www.infragistics.com/angular-demos/assets/images/card/media/ROZES-Under-the-Grave.jpg" className={classes("image")} key={uuid()} />
          </IgrCardMedia>
          <IgrCardHeader key={uuid()}>
            <h3 slot="title" key={uuid()}>
              <span key={uuid()}>The is the card title</span>
            </h3>
            <h5 slot="subtitle" key={uuid()}>
              <span key={uuid()}></span>
            </h5>
          </IgrCardHeader>
          <IgrCardContent className={classes("body-content")} key={uuid()}>
            <div className={classes("column-layout group")} key={uuid()}>
              <p className={classes("typography__body-2 text")}>
                <span>Researching a topic effectively involves a multifaceted approach, moving beyond a simple search to a more systematic exploration of information. Here's a breakdown of different ways to research a topic, from defining your focus to utilizing various resources and methods:</span>
              </p>
            </div>
          </IgrCardContent>
          <IgrCardActions className={classes("actions-content")} key={uuid()}>
            <div style={{display: 'contents'}} slot="start" key={uuid()}>
              <IgrButton type="button" className={classes("button-2")}>
                <span key={uuid()}>Primary</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
            </div>
          </IgrCardActions>
        </IgrCard>
      </div>
    </>
  );
}
