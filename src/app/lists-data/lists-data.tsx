import { IgrAvatar, IgrAvatarModule, IgrButton, IgrButtonModule, IgrCard, IgrCardActions, IgrCardHeader, IgrCardMedia, IgrCardModule, IgrList, IgrListItem, IgrListModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import { useNavigate } from 'react-router-dom';
import { useGetEmployeeDtoList } from '../hooks/ignorthwind-api-hooks';
import styles from './lists-data.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

IgrAvatarModule.register();
IgrButtonModule.register();
IgrCardModule.register();
IgrListModule.register();
IgrRippleModule.register();

export default function ListsData() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();
  const { iGNorthwindAPIEmployeeDto } = useGetEmployeeDtoList();

  return (
    <>
      <div className={classes("column-layout lists-data-container")}>
        <div className={classes("row-layout group")}>
          {iGNorthwindAPIEmployeeDto?.map((item) => (
            <IgrCard className={classes("card")} key={uuid()}>
              <div className={classes("group_1")} key={uuid()}>
                <IgrCardHeader>
                  <h3 slot="title" key={uuid()}>
                    <span key={uuid()}>{item.lastName}</span>
                  </h3>
                  <h5 slot="subtitle" key={uuid()}>
                    <span key={uuid()}>{item.title}</span>
                  </h5>
                </IgrCardHeader>
                <IgrCardActions className={classes("actions-content")}>
                  <div style={{display: 'contents'}} slot="start" key={uuid()}>
                    <IgrButton variant="flat" type="button" onClick={() => navigate(`/layouts`)} className={classes("button")}>
                      <span key={uuid()}>Details</span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrButton>
                  </div>
                </IgrCardActions>
              </div>
              <IgrCardMedia className={classes("media-content")} key={uuid()}>
                <img src={item.avatarUrl} className={classes("image")} key={uuid()} />
              </IgrCardMedia>
            </IgrCard>
          ))}
        </div>
        <div className={classes("row-layout group_2")}>
          <IgrList className={classes("list")}>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar shape="circle" className={classes("avatar")} key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>home</span>
                  </span>
                </IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Home</div>
              <div slot="subtitle" key={uuid()}>Subtitle...</div>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar shape="circle" className={classes("avatar")} key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>business</span>
                  </span>
                </IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Accounts</div>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar shape="circle" className={classes("avatar")} key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>person_outline</span>
                  </span>
                </IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Contacts</div>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar shape="circle" className={classes("avatar")} key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>inbox</span>
                  </span>
                </IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Contracts</div>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar shape="circle" className={classes("avatar")} key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>bar_chart</span>
                  </span>
                </IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Reports</div>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar shape="circle" className={classes("avatar")} key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>calendar_today</span>
                  </span>
                </IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Calendar</div>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar shape="circle" className={classes("avatar")} key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>assignment_turned_in</span>
                  </span>
                </IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Tasks</div>
            </IgrListItem>
          </IgrList>
          <div className={classes("column-layout group_3")}>
            <IgrList className={classes("list_1")}>
              {iGNorthwindAPIEmployeeDto?.map((item) => (
                <IgrListItem key={uuid()}>
                  <div slot="start" key={uuid()}>
                    <IgrAvatar src={item.avatarUrl} shape="circle" className={classes("avatar")} key={uuid()}></IgrAvatar>
                  </div>
                  <div slot="title" key={uuid()}>{item.lastName}</div>
                  <div slot="subtitle" key={uuid()}>{item.title}</div>
                  <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                    <span key={uuid()}>keyboard_arrow_right</span>
                  </span>
                </IgrListItem>
              ))}
            </IgrList>
          </div>
          <div className={classes("column-layout group_3")}>
            <IgrList className={classes("list_1")}>
              {iGNorthwindAPIEmployeeDto?.map((item) => (
                <IgrListItem key={uuid()}>
                  <div slot="start" key={uuid()}>
                    <IgrAvatar src={item.avatarUrl} shape="rounded" className={classes("avatar_1")} key={uuid()}></IgrAvatar>
                  </div>
                  <div slot="title" key={uuid()}>{item.firstName}</div>
                  <div slot="subtitle" key={uuid()}>{item.title}</div>
                  <div key={uuid()}>
                    <div className={classes("row-layout group_4")} key={uuid()}>
                      <div className={classes("column-layout group_5")}>
                        <p className={classes("typography__caption text")}>
                          <span>Birthday</span>
                        </p>
                        <p className={classes("typography__caption text_1")}>
                          <span>{item.birthDate?.toString()}</span>
                        </p>
                      </div>
                      <div className={classes("column-layout group_5")}>
                        <p className={classes("typography__caption text")}>
                          <span>Country</span>
                        </p>
                        <p className={classes("typography__caption text_1")}>
                          <span>{item.address?.country}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </IgrListItem>
              ))}
            </IgrList>
          </div>
        </div>
      </div>
    </>
  );
}
