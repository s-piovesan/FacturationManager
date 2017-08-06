"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var angular_calendar_1 = require("angular-calendar");
var app_routing_module_1 = require("./app-routing.module");
var core_2 = require("@angular/core");
// Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./in-memory-data.service");
var index_1 = require("./_directives/index");
var index_2 = require("./_services/index");
var app_component_1 = require("./app.component");
var planning_component_1 = require("./planning/planning.component");
var day_event_selection_component_1 = require("./day-event-selection.component");
var work_type_component_1 = require("./work-type/work-type.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
            app_routing_module_1.AppRoutingModule,
            angular_calendar_1.CalendarModule.forRoot(),
            forms_1.ReactiveFormsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            index_1.ModalComponent,
            planning_component_1.PlanningComponent,
            day_event_selection_component_1.DayEventComponent,
            work_type_component_1.WorkTypeComponent
        ],
        exports: [
            planning_component_1.PlanningComponent,
            day_event_selection_component_1.DayEventComponent,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule
        ],
        providers: [
            index_2.ModalService,
            { provide: core_2.LOCALE_ID, useValue: "fr-FR" }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map