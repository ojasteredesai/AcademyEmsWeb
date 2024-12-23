
import { HomeComponent } from "../Home/AcademyEmsApp.HomeComponent";

export const MainRoutes = [
    { path: 'Home', component: HomeComponent },
    { path: 'Course',  loadChildren: () => import('../Course/AcademyEmsApp.CourseModule').then(x => x.CourseModule) },
    { path: 'User',  loadChildren: () => import('../User/AcademyEmsApp.UserModule').then(x => x.UserModule) },
    { path: 'Batch',  loadChildren: () => import('../Batch/AcademyEmsApp.BatchModule').then(x => x.BatchModule) },
    { path: '', component: HomeComponent }    
];