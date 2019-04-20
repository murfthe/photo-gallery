import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { GalleryMenuComponent } from './gallery-menu/gallery-menu.component';
import { HomeComponent } from './home/home.component';
import { PhotoCategoryComponent } from './photo-category/photo-category.component';
import { FooterComponent } from './footer/footer.component';
import { ThemeExhibitionComponent } from './theme-exhibition/theme-exhibition.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GalleryMenuComponent,
    HomeComponent,
    PhotoCategoryComponent,
    FooterComponent,
    ThemeExhibitionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
