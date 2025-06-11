import FormsGridCRUD from './forms-grid-crud/forms-grid-crud';
import { redirect } from 'react-router-dom';
import DynamicRouting from './dynamic-routing/dynamic-routing';
import FinancialChart from './financial-chart/financial-chart';
import RouteDetails from './route-details/route-details';
import SelectionDetail from './selection-detail/selection-detail';
import GridWithTemplates from './grid-with-templates/grid-with-templates';
import GridAndTreeGrid from './grid-and-tree-grid/grid-and-tree-grid';
import RevealDashboard from './reveal-dashboard/reveal-dashboard';
import Layouts from './layouts/layouts';
import Position from './position/position';
import TabLayout from './tab-layout/tab-layout';
import ExpansionPanelsTree from './expansion-panels-tree/expansion-panels-tree';
import Stepper from './stepper/stepper';
import CardCalendar from './card-calendar/card-calendar';
import ListsData from './lists-data/lists-data';
import PivotGrid from './pivot-grid/pivot-grid';
import CategoryCharts from './category-charts/category-charts';
import TypeScale from './type-scale/type-scale';
import Inputs from './inputs/inputs';
import PickersCombo from './pickers-combo/pickers-combo';
import DialogsAndDropdowns from './dialogs-and-dropdowns/dialogs-and-dropdowns';
import Image from './image/image';
import GridSummaries from './grid-summaries/grid-summaries';
import LoginPage from './login-page/login-page';
import ChildView from './child-view/child-view';
import ChildView1 from './child-view1/child-view1';

export const routes = [
  { path: 'forms-grid-crud', element: <FormsGridCRUD />, text: 'Forms Grid CRUD' },
  { index: true, loader: () => redirect('dynamic-routing') },
  { path: 'dynamic-routing', element: <DynamicRouting />, text: 'Dynamic routing' },
  { path: 'financial-chart', element: <FinancialChart />, text: 'Financial chart' },
  { path: 'route-details/:rCustomerID', element: <RouteDetails />, text: 'Route details' },
  { path: 'selection-detail', element: <SelectionDetail />, text: 'Selection-detail' },
  { path: 'grid-with-templates', element: <GridWithTemplates />, text: 'Grid with templates' },
  { path: 'grid-and-tree-grid', element: <GridAndTreeGrid />, text: 'Grid and Tree-grid' },
  { path: 'reveal-dashboard', element: <RevealDashboard />, text: 'Reveal Dashboard' },
  { path: 'layouts', element: <Layouts />, text: 'Layouts' },
  { path: 'position', element: <Position />, text: 'Position' },
  { path: 'tab-layout', element: <TabLayout />, text: 'Tab layout' },
  { path: 'expansion-panels-tree', element: <ExpansionPanelsTree />, text: 'Expansion panels-tree' },
  { path: 'stepper', element: <Stepper />, text: 'Stepper' },
  { path: 'card-calendar', element: <CardCalendar />, text: 'Card Calendar' },
  { path: 'lists-data', element: <ListsData />, text: 'Lists data' },
  { path: 'pivot-grid', element: <PivotGrid />, text: 'Pivot grid' },
  { path: 'category-charts', element: <CategoryCharts />, text: 'Category charts' },
  { path: 'type-scale', element: <TypeScale />, text: 'Type scale' },
  { path: 'inputs', element: <Inputs />, text: 'Inputs' },
  { path: 'pickers-combo', element: <PickersCombo />, text: 'Pickers Combo' },
  { path: 'dialogs-and-dropdowns', element: <DialogsAndDropdowns />, text: 'Dialogs and dropdowns' },
  { path: 'image', element: <Image />, text: 'Image' },
  { path: 'grid-summaries', element: <GridSummaries />, text: 'Grid summaries' },
  { path: 'login-page', element: <LoginPage />, text: 'login page' },
  { path: 'child-view', element: <ChildView />, text: 'Child View' },
  { path: 'child-view1', element: <ChildView1 />, text: 'Child View1' }
];
