import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
 
export const AppRoutes: any = [
    { path: "page1", component: Page1Component },
    { path: "page2", component: Page2Component },
    { path: "page3", component: Page3Component },
    { path: "", component: TodoAppComponent },
    { path: "todo", component: TodoAppComponent },
];
 
export const AppComponents: any = [
    Page1Component,
    Page2Component,
    Page3Component,
    TodoAppComponent
];