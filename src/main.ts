import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import jspreadsheet from 'jspreadsheet';
import parser from '@jspreadsheet/parser';
jspreadsheet.setLicense('NTY0N2QwYTExOTU0NDVjMzVlMDg1OTAyNTFlMGFmYjNmN2Y2ZjY3NjQyMmNlZWE4YTgzYTc2ZDU0MTE4YjliYjM4YzAyZThmZjBjMmI3ZTUzMzViNDc0M2U1ZjQ2NmMyN2E5N2Y1NjYyOTZmODA5YTE0MjY2YWExYWNjNmFjYWQsZXlKamJHbGxiblJKWkNJNkltWm1ZMlpsTXpVeFlqQm1aR0ZqTldRNFpqaGtNakEwTURRMk5UWTBaREV3TnpCaVlqZ3dZVE1pTENKdVlXMWxJam9pWkhWdVoyVnZiakpySWl3aVpHRjBaU0k2TVRjeU5qUTBNVEl3TUN3aVpHOXRZV2x1SWpwYkluUjRkV0Z1TWpBd01DNW5hWFJvZFdJdWFXOGlMQ0ozWldJaUxDSnNiMk5oYkdodmMzUWlYU3dpY0d4aGJpSTZNekVzSW5OamIzQmxJanBiSW5ZM0lpd2lkamdpTENKMk9TSXNJbll4TUNJc0luWXhNU0lzSW1admNtMTFiR0VpTENKbWIzSnRjeUlzSW5KbGJtUmxjaUlzSW5CaGNuTmxjaUlzSW1sdGNHOXlkR1Z5SWl3aWMyVmhjbU5vSWl3aVkyOXRiV1Z1ZEhNaUxDSjJZV3hwWkdGMGFXOXVjeUlzSW1Ob1lYSjBjeUlzSW5CeWFXNTBJaXdpWW1GeUlpd2ljMmhsWlhSeklpd2ljMmhoY0dWeklpd2ljMlZ5ZG1WeUlsMTk=');
jspreadsheet.setExtensions({ parser })

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
