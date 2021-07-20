import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { interfaceMigrapp } from "../models/interfaceMigrapp";
import { LocalStorageService } from "../provider/local-storage.service";
import { Observable, forkJoin } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class ApiServiceService {
  private url: string = "";
  localName: any;
  select: any;

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService
  ) {}

  searchData(search: string): Observable<interfaceMigrapp[]> {
    this.url = `${process.env.API_URL}city.php/?search=${encodeURI(search)}`;
    return this.http.get<interfaceMigrapp[]>(this.url);
  }

  searchDatas(city: string, city2: string): Observable<interfaceMigrapp[]> {
    this.url = `${process.env.API_URL}city.php/?search=${encodeURI(
      city
    )}&c2=${encodeURI(city2)}`;
    return this.http.get<interfaceMigrapp[]>(this.url);
  }

  setCurrency() {
    if (this.localStorage.getItem("data") == null) {
      this.localStorage.setItem(
        "data",
        JSON.stringify({
          id: 96,
          change: 1,
          code: "MXN",
          currency: "Mexican Peso",
        })
      );
    }
  }

  /*************DATA DETAILS***********/
  /*CRIMEN DETAILS*/
  crimeDetails = [
    { detail: "Nivel de criminalidad", code: "level_crime" },
    {
      detail: "Incremento del crimen en los últimos 3 años",
      code: "crime_increasing",
    },
    { detail: "Preocupación de sufir robos o hurtos", code: "mugged" },
    { detail: "Preocupación de sufir robo en domicilio", code: "home_broken" },
    { detail: "Preocupación de sufrir robo de coche", code: "car_stolen" },
    {
      detail: "Preocupación de sufrir robo del interior de un coche",
      code: "things_car",
    },
    { detail: "Preocupación de ser agredido", code: "attacked" },
    { detail: "Preocupación de ser insultado", code: "insulted" },
    { detail: "Preocupación de sufrir discriminación", code: "racism" },
    { detail: "Problematica del consumo de drogas", code: "drugs" },
    {
      detail:
        "Problematica de crimenes contra la propiedad como robo y vandalismo",
      code: "property_crimes",
    },
    {
      detail: "Problematica con crimes violentos como agresión o atraco armado",
      code: "property_crimes",
    },
    { detail: "Problematica con corrupción y sobornos", code: "corruption" },
    {
      detail: "Seguridad al caminar solo durante el día",
      code: "safe_daylight",
    },
    {
      detail: "Seguridad al caminar solo durante la noche",
      code: "safe_night",
    },
  ];
  /*HEALTH DETAILS*/
  healthDetails = [
    { detail: "Habilidad y capacitación del personal médico", code: "skill" },
    {
      detail: "Velocidad al completar observaciónes e informes",
      code: "speed",
    },
    {
      detail: "Equipamiento para diagnósticos y tratamientos modernos",
      code: "equipment",
    },
    {
      detail: "Precisión y exhaustividad al rellenar informes",
      code: "accuracy",
    },
    { detail: "Simpatía y cordialidad del personal", code: "friendliness" },
    {
      detail: "Respuesta (tiempos de espera) en los centros médicos",
      code: "waitings",
    },
    { detail: "Satisfacción con el coste pagado por ti", code: "cost" },
    { detail: "Conveniencia de la ubicación", code: "location" },
  ];
  /*POLLUTIOM DETAILS*/
  pollutionDetails = [
    {
      name: "Contaminación",
      num: 59,
      data: [
        { detail: "Contaminación del aire", code: "air_quality" },
        { detail: "contaminacioón del agua potable", code: "water_drinking" },
        {
          detail: "Insatisfacción con la gestión de residuos",
          code: "garbage",
        },
        { detail: "Sucio y Desordenado", code: "clean" },
        { detail: "Ruido y Contaminación Lumínica", code: "noise_light" },
        { detail: "Contaminación del Agua", code: "water_pollution" },
        {
          detail: "Insatisfacción al pasar tiempo en la ciudad",
          code: "comfortable",
        },
        {
          detail: "Insatisfacción con los Parques y Zonas Verdes de la ciudad",
          code: "parks",
        },
      ],
    },
    {
      name: "Limpieza",
      num: 49,
      data: [
        { detail: "Calidad del aire", code: "air_quality" },
        {
          detail: "Accesibilidad y Calidad del Agua Potable",
          code: "water_drinking",
        },
        { detail: "Satisfacción con la Gestión de Residuos", code: "garbage" },
        { detail: "Limpia y ordenada", code: "clean" },
        {
          detail: "Tranquilo y sin problemas con luces nocturnas",
          code: "noise_light",
        },
        { detail: "Calidad del Agua", code: "water_pollution" },
        {
          detail: "Comodidad al pasar tiempo en la ciudad",
          code: "comfortable",
        },
        { detail: "Calidad de las Zonas Verdes y Parques", code: "parks" },
      ],
    },
  ];
  /*TRAFFIC DETAILS*/
  trafficDetails = [
    { detail: "Distancia", code: "distance" },
    { detail: "Caminar", code: "walk" },
    { detail: "Trayecto", code: "trayecto" },
    { detail: "Espera", code: "waiting" },
    { detail: "Otro", code: "other" },
  ];

  getcrimeDetails() {
    return this.crimeDetails;
  }
  gethealthDetails() {
    return this.healthDetails;
  }
  getpollutionDetails() {
    return this.pollutionDetails;
  }
  gettrafficDetails() {
    return this.trafficDetails;
  }
}
