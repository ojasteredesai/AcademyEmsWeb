
import { HomeComponent } from "../Home/AcademyEmsApp.HomeComponent";
import { CourseTypeComponent } from "../Course/AcademyEmsApp.CourseTypeComponent";
import { UserTypeComponent } from "../User/AcademyEmsApp.UserTypeComponent";

export const MainRoutes = [
    { path: 'Home', component: HomeComponent },
    { path: 'Course', component: CourseTypeComponent },
    { path: 'User', component: UserTypeComponent },
    { path: '', component: HomeComponent }
    
];