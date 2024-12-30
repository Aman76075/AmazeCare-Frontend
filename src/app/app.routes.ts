import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DoctorPageComponent } from './pages/doctor-page/doctor-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AppointmentListComponent } from './components/doctor/appointment-list/appointment-list.component';
import { ScheduleComponent } from './components/doctor/schedule/schedule.component';
import { ExecutivePageComponent } from './pages/executive-page/executive-page.component';
import { ExecutiveDoctorsListComponent } from './components/executive/executive-doctors-list/executive-doctors-list.component';
import { ExecutiveManageDoctorsComponent } from './components/executive/executive-manage-doctors/executive-manage-doctors.component';
import { LabOperatorListComponent } from './components/executive/lab-operator-list/lab-operator-list.component';
import { LabOperatorOnboardComponent } from './components/executive/lab-operator-onboard/lab-operator-onboard.component';
import { GenerateRecordComponent } from './components/doctor/generate-record/generate-record.component';
import { PrescribeTestComponent } from './components/doctor/prescribe-test/prescribe-test.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileExecutiveComponent } from './components/executive/profile-executive/profile-executive.component';
import { MedicalHistoryComponent } from './components/doctor/medical-history/medical-history.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AllExecutiveComponent } from './components/admin/all-executive/all-executive.component';
import { OnboardAdminComponent } from './components/admin/onboard-admin/onboard-admin.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { PatientPageComponent } from './pages/patient-page/patient-page.component';
import { PatientProfileComponent } from './components/patient/patient-profile/patient-profile.component';
import { PatientDetailsComponent } from './components/doctor/patient-details/patient-details.component';
import { BookAppointmentComponent } from './components/patient/book-appointment/book-appointment.component';
import { PatientRecordComponent } from './components/patient/patient-record/patient-record.component';

export const routes: Routes = [
    {
        path: '',component:LandingPageComponent,children:[
            {
                path: '',component:HomeComponent

            },
            {
                path: 'login',component:LoginPageComponent
            },
            {
                path:'services',component:ServicesComponent

            },
            {
                path:'sign-up',component:SignUpComponent
            }
        ]
    },
    {
        path:'doctor',component:DoctorPageComponent,children:[
            {
                path:'appointment-list',component:AppointmentListComponent
            },
            {
                path:'doctor-schedule',component:ScheduleComponent
            },
            {
                path:'generate-medical-record/:id',component:GenerateRecordComponent
            },
            {
                path:'prescribe-testNscans/:id',component:PrescribeTestComponent
            },
            {
                path:'get-medical-history/:id',component:MedicalHistoryComponent

            },
            {
                path:'doctor-profile',component:ProfileComponent

            },
            {
                path:'patient-info',component:PatientDetailsComponent
            }
           
        ]
    },
    {
        path:'executive',component:ExecutivePageComponent,children:[
            {
                path:'doctors-list',component:ExecutiveDoctorsListComponent
            },
            {
                path:'onboard-doctor',component:ExecutiveManageDoctorsComponent
            },
            {
                path:'lab-operator-list',component:LabOperatorListComponent
            },
            {
                path:'onboard-lab-operator',component:LabOperatorOnboardComponent
            },{
                path:'executive-profile',component:ProfileExecutiveComponent
            }
        ]

    },
    {
        path:'in-patient',component:PatientPageComponent,children:[
            {
                path:'patient-profile',component:PatientProfileComponent
            },
            {
                path:'book-appointment',component:BookAppointmentComponent
            },
            {
                path:'patient-record',component:PatientRecordComponent
            }

        ]

    },
    {
         path:'admin',component:AdminPageComponent,children:[
            {
                path:'executive-list',component:AllExecutiveComponent
            },{
                path:'onboard-executive',component:OnboardAdminComponent
            }
         ]
    },
    {
        path:'**',component:PageNotFoundComponent
    }
];
