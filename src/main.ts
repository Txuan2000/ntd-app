import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import jspreadsheet from 'jspreadsheet';
import parser from '@jspreadsheet/parser';
import { environment } from './environments/environment';
jspreadsheet.setLicense(environment.jexcelLicense);
jspreadsheet.setExtensions({ parser })

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
