import { RvRevealView } from 'reveal-sdk-wrappers-react';
import { RevealViewOptions } from 'reveal-sdk-wrappers';
import styles from './reveal-dashboard.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function RevealDashboard() {
  const classes = createClassTransformer(styles);
  $.ig.RevealSdkSettings.setBaseUrl('https://samples.revealbi.io/upmedia-backend/reveal-api/');

  const dashboardOptions: RevealViewOptions = {
    visualizations: {
      menu: {
        copy: false,
        duplicate: false
      }
    }
  };

  return (
    <>
      <div className={classes("row-layout reveal-dashboard-container")}>
        <div className={classes("group")}>
          <RvRevealView dashboard="Sales" options={dashboardOptions}></RvRevealView>
        </div>
      </div>
    </>
  );
}
