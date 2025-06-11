import { IgrAvatar, IgrAvatarModule, IgrButton, IgrButtonModule, IgrCalendar, IgrCalendarModule, IgrCard, IgrCardActions, IgrCardContent, IgrCardHeader, IgrCardMedia, IgrCardModule, IgrDatePicker, IgrDatePickerModule, IgrIconButton, IgrIconButtonModule, IgrRating, IgrRatingModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import { useState } from 'react';
import styles from './card-calendar.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

IgrAvatarModule.register();
IgrButtonModule.register();
IgrCalendarModule.register();
IgrCardModule.register();
IgrDatePickerModule.register();
IgrIconButtonModule.register();
IgrRatingModule.register();
IgrRippleModule.register();

export default function CardCalendar() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date('2024-08-12T00:00'));
  const [value, setValue] = useState<number | undefined>(4);

  return (
    <>
      <div className={classes("column-layout card-calendar-container")}>
        <div className={classes("row-layout group")}>
          <IgrCard className={classes("card-10")}>
            <IgrCardHeader key={uuid()}>
              <div slot="thumbnail" key={uuid()}>
                <IgrAvatar shape="circle" className={classes("avatar")} key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>people</span>
                  </span>
                </IgrAvatar>
              </div>
              <h3 slot="title" key={uuid()}>
                <span key={uuid()}>Title goes here...</span>
              </h3>
              <h5 slot="subtitle" key={uuid()}>
                <span key={uuid()}>Subtitle goes here...</span>
              </h5>
            </IgrCardHeader>
            <IgrCardActions className={classes("actions-content")} key={uuid()}>
              <div style={{display: 'contents'}} slot="start" key={uuid()}>
                <IgrButton variant="flat" type="button" className={classes("button")}>
                  <span key={uuid()}>Button</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
              <div slot="end" key={uuid()}>
                <IgrIconButton className={classes("icon-button")} key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>adb</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
                <IgrIconButton className={classes("icon-button")} key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>bookmark</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
                <IgrIconButton className={classes("icon-button")} key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>share</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
              </div>
            </IgrCardActions>
          </IgrCard>
          <IgrCard elevated={true} className={classes("card-10")}>
            <IgrCardHeader key={uuid()}>
              <h3 slot="title" key={uuid()}>
                <span key={uuid()}>Rozes</span>
              </h3>
              <h5 slot="subtitle" key={uuid()}>
                <span key={uuid()}>Under the grave (2016)</span>
              </h5>
            </IgrCardHeader>
            <IgrCardMedia className={classes("media-content")} key={uuid()}>
              <img src="https://www.infragistics.com/angular-demos/assets/images/card/media/ROZES-Under-the-Grave.jpg" className={classes("image")} key={uuid()} />
            </IgrCardMedia>
            <IgrCardActions className={classes("actions-content")} key={uuid()}>
              <div style={{display: 'contents'}} slot="start" key={uuid()}>
                <IgrIconButton className={classes("icon-button")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>favorite</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
              </div>
              <div style={{display: 'contents'}} slot="start" key={uuid()}>
                <IgrIconButton className={classes("icon-button")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>bookmark</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
              </div>
              <div style={{display: 'contents'}} slot="start" key={uuid()}>
                <IgrIconButton className={classes("icon-button")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>share</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
              </div>
              <div slot="end" key={uuid()}>
                <IgrButton variant="flat" type="button" className={classes("button")} key={uuid()}>
                  <span key={uuid()}>Play</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
            </IgrCardActions>
          </IgrCard>
          <IgrCard elevated={true} className={classes("card-1")}>
            <IgrCardMedia className={classes("media-content_1")} key={uuid()}>
              <img src="https://www.infragistics.com/angular-demos/assets/images/card/media/ROZES-Under-the-Grave.jpg" className={classes("image")} key={uuid()} />
            </IgrCardMedia>
            <IgrCardHeader key={uuid()}>
              <h3 slot="title" key={uuid()}>
                <span key={uuid()}>Title goes here...</span>
              </h3>
              <h5 slot="subtitle" key={uuid()}>
                <span key={uuid()}>Subtitle goes here...</span>
              </h5>
            </IgrCardHeader>
            <IgrCardActions className={classes("actions-content")} key={uuid()}>
              <div style={{display: 'contents'}} slot="start" key={uuid()}>
                <IgrButton type="button" className={classes("button")}>
                  <span key={uuid()}>Primary</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
              <div style={{display: 'contents'}} slot="start" key={uuid()}>
                <IgrButton variant="outlined" type="button" className={classes("button")}>
                  <span key={uuid()}>Secondary</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
              <div slot="end" key={uuid()}>
                <IgrIconButton className={classes("icon-button-5")} key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>favorite</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
                <IgrIconButton className={classes("icon-button")} key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>bookmark</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
                <IgrIconButton className={classes("icon-button")} key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>share</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
              </div>
            </IgrCardActions>
          </IgrCard>
          <IgrCard elevated={true} className={classes("card-1")}>
            <IgrCardMedia className={classes("media-content_1")} key={uuid()}>
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
              <div className={classes("column-layout group_1")} key={uuid()}>
                <p className={classes("typography__body-2 text")}>
                  <span>Researching a topic effectively involves a multifaceted approach, moving beyond a simple search to a more systematic exploration of information. Here's a breakdown of different ways to research a topic, from defining your focus to utilizing various resources and methods:</span>
                </p>
                <IgrButton type="button" className={classes("button_1")}>
                  <span key={uuid()}>Button</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
            </IgrCardContent>
          </IgrCard>
          <IgrCard elevated={true} className={classes("card-2")}>
            <div className={classes("group_2")} key={uuid()}>
              <IgrCardHeader>
                <h3 slot="title" key={uuid()}>
                  <span key={uuid()}>Title goes here...</span>
                </h3>
                <h5 slot="subtitle" key={uuid()}>
                  <span key={uuid()}>Subtitle goes here...</span>
                </h5>
              </IgrCardHeader>
            </div>
            <IgrCardMedia className={classes("media-content_2")} key={uuid()}>
              <img src="https://www.infragistics.com/angular-demos/assets/images/card/media/ROZES-Under-the-Grave.jpg" className={classes("image")} key={uuid()} />
            </IgrCardMedia>
          </IgrCard>
          <IgrCard elevated={true} className={classes("card-11")}>
            <IgrCardHeader key={uuid()}>
              <h3 slot="title" key={uuid()}>
                <span key={uuid()}>Rozes</span>
              </h3>
              <h5 slot="subtitle" key={uuid()}>
                <span key={uuid()}>Under the grave (2016)</span>
              </h5>
            </IgrCardHeader>
            <IgrCardActions className={classes("actions-content")} key={uuid()}>
              <div style={{display: 'contents'}} slot="start" key={uuid()}>
                <IgrIconButton className={classes("icon-button")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>favorite</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
              </div>
              <div style={{display: 'contents'}} slot="start" key={uuid()}>
                <IgrIconButton className={classes("icon-button")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>bookmark</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
              </div>
              <div slot="end" key={uuid()}>
                <IgrButton variant="flat" type="button" className={classes("button")} key={uuid()}>
                  <span key={uuid()}>Play</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
                <IgrButton variant="flat" type="button" className={classes("button")} key={uuid()}>
                  <span key={uuid()}>Button</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
            </IgrCardActions>
          </IgrCard>
          <IgrCard elevated={true} className={classes("card-3")}>
            <div className={classes("group_3")} key={uuid()}>
              <div className={classes("row-layout")}>
                <IgrCardHeader>
                  <div slot="thumbnail" key={uuid()}>
                    <IgrCardMedia className={classes("media-content_3")} key={uuid()}>
                      <img src="https://www.infragistics.com/angular-demos/assets/images/card/media/ROZES-Under-the-Grave.jpg" key={uuid()} />
                    </IgrCardMedia>
                  </div>
                  <h3 slot="title" key={uuid()}>
                    <span key={uuid()}>Rozes</span>
                  </h3>
                  <h5 slot="subtitle" key={uuid()}>
                    <span key={uuid()}>Under the grave (2016)</span>
                  </h5>
                </IgrCardHeader>
              </div>
              <IgrCardContent className={classes("body-content")}>
                <div className={classes("column-layout column-layout-2")} key={uuid()}>
                  <p className={classes("typography__body-2 text-2")}>
                    <span>As I have always said: I write what’s real and what’s true, even if it means throwing myself under the bus....</span>
                  </p>
                </div>
              </IgrCardContent>
            </div>
            <span className={classes("divider")} key={uuid()}>Divider not yet available in React</span>
            <IgrCardActions className={classes("actions-content")} key={uuid()}>
              <div slot="end" className={classes("igx-card-actions--justify content")} key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>skip_previous</span>
                </span>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>play_circle</span>
                </span>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>skip_next</span>
                </span>
              </div>
            </IgrCardActions>
          </IgrCard>
          <IgrCard elevated={true} className={classes("card-5")}>
            <div className={classes("group_3")} key={uuid()}>
              <div className={classes("row-layout")}>
                <IgrCardHeader>
                  <div slot="thumbnail" key={uuid()}>
                    <IgrCardMedia className={classes("media-content_3")} key={uuid()}>
                      <img src="https://www.infragistics.com/angular-demos/assets/images/card/media/ROZES-Under-the-Grave.jpg" key={uuid()} />
                    </IgrCardMedia>
                  </div>
                  <h3 slot="title" key={uuid()}>
                    <span key={uuid()}>Rozes</span>
                  </h3>
                  <h5 slot="subtitle" key={uuid()}>
                    <span key={uuid()}>Under the grave (2016)</span>
                  </h5>
                </IgrCardHeader>
              </div>
              <IgrCardContent className={classes("body-content")}>
                <div className={classes("row-layout column-layout-3")} key={uuid()}>
                  <p className={classes("typography__body-2 text-3")}>
                    <span>Rate this album</span>
                  </p>
                  <IgrRating value={value} change={(_c, e) => setValue(e.detail)} className={classes("rating")}></IgrRating>
                </div>
              </IgrCardContent>
            </div>
            <span className={classes("divider")} key={uuid()}>Divider not yet available in React</span>
          </IgrCard>
        </div>
        <div className={classes("column-layout group_4")}>
          <div className={classes("group_5")}>
            <IgrDatePicker label="Date" value={selectedDate} outlined={true} mode="dialog" change={(_c, e) => setSelectedDate(new Date(e.detail))} change={(_c, e) => setSelectedDate(new Date(e.detail))}></IgrDatePicker>
          </div>
          <div className={classes("row-layout group_6")}>
            <IgrCalendar weekStart="tuesday" value={selectedDate} hideHeader={true} headerOrientation="horizontal" className={classes("calendar")}></IgrCalendar>
            <IgrCalendar value={selectedDate} hideHeader={false} headerOrientation="horizontal" className={classes("calendar")}></IgrCalendar>
            <IgrCalendar value={selectedDate} hideHeader={false} headerOrientation="vertical" className={classes("calendar")}></IgrCalendar>
            <IgrCalendar value={selectedDate} showWeekNumbers={true} visibleMonths={2} hideHeader={false} headerOrientation="horizontal" className={classes("calendar")}></IgrCalendar>
          </div>
        </div>
      </div>
    </>
  );
}
