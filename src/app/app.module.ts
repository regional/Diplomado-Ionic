import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NewsServices } from '../services/news.services';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { GalleriesPage } from '../pages/galleries/galleries';
import { UsersPage } from '../pages/users/users';
import { PublishformPage } from '../pages/publishform/publishform';
import { ProfilePage } from '../pages/profile/profile';
import { PostsPage } from '../pages/posts/posts';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { DataSharingService } from '../services/behavior.subject.services';
import { PopoverComponent } from '../components/popover/popover';
import { HeaderComponent } from '../components/header/header';
import { Camera } from '@ionic-native/camera';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { UploadOptionsComponent } from '../components/upload-options/upload-options';
import { NewsDetailsPage } from '../pages/news-details/news-details';
import { AddCommetsComponent } from '../components/add-commets/add-commets';
import { UserFormPage } from '../pages/user-form/user-form';
import { ListCommentsComponent } from '../components/list-comments/list-comments';



export const firebaseConfig = {
  apiKey: "AIzaSyALYczeVJP0LUaqh8oiObA7LFnUL6iLL_s",
  authDomain: "news-ionic-app-8ec8b.firebaseapp.com",
  databaseURL: "https://news-ionic-app-8ec8b.firebaseio.com",
  projectId: "news-ionic-app-8ec8b",
  storageBucket: "",
  messagingSenderId: "346730516978",
  appId: "1:346730516978:web:a2e3a9b15c8816984b5b6b"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SigninPage,
    SignupPage,
    GalleriesPage,
    UsersPage,
    PublishformPage,
    ProfilePage,
    PostsPage,
    NewsDetailsPage,
    UserFormPage,
    PopoverComponent,
    HeaderComponent,
    UploadOptionsComponent,
    AddCommetsComponent,
    ListCommentsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SigninPage,
    SignupPage,
    GalleriesPage,
    UsersPage,
    PublishformPage,
    ProfilePage,
    PostsPage,
    NewsDetailsPage,
    UserFormPage,
    PopoverComponent,
    HeaderComponent,
    UploadOptionsComponent,
    AddCommetsComponent,
    ListCommentsComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NewsServices,
    AuthServiceProvider,
    DataSharingService,
    Camera,
    PhotoViewer
  ]
})
export class AppModule {}
