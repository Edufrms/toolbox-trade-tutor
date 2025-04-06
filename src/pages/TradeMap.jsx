
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function TradeMap() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Trade Map Tutorial</h1>
      
      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>1. ¿Qué es Trade Map?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-2/3">
                <p>
                  Trade Map es una herramienta en línea desarrollada por el Centro de Comercio Internacional (ITC) 
                  que proporciona acceso a una de las bases de datos más completas sobre comercio internacional. 
                  Esta plataforma permite a usuarios de todo el mundo analizar información sobre exportaciones, 
                  importaciones, demanda internacional, mercados alternativos y el rol de los competidores.
                </p>
                <br />
                <p>
                  La herramienta cubre datos comerciales de más de 220 países y territorios y 5,300 productos 
                  del Sistema Armonizado, ofreciendo una visión detallada y actualizada del comercio global.
                </p>
              </div>
              <div className="md:w-1/3">
                <img 
                  src="https://www.intracen.org/sites/default/files/inline-images/tm_home_en.png" 
                  alt="Trade Map Homepage" 
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>2. Cómo registrarse y acceder</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-2/3">
                <h3 className="font-semibold mb-2">Pasos para registrarse:</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Visite la página oficial de <a href="https://www.trademap.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Trade Map</a></li>
                  <li>Haga clic en "Register" en la esquina superior derecha</li>
                  <li>Complete el formulario con sus datos personales</li>
                  <li>Verifique su correo electrónico para activar la cuenta</li>
                  <li>Inicie sesión con sus credenciales</li>
                </ol>
                <p className="mt-4">
                  <strong>Nota:</strong> Para usuarios en países en desarrollo, el acceso es gratuito gracias 
                  a la financiación de la UE, DFID, el Banco Mundial y otros donantes.
                </p>
              </div>
              <div className="md:w-1/3">
                <img 
                  src="https://www.intracen.org/sites/default/files/inline-images/tm_registration.png" 
                  alt="Registro en Trade Map" 
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>3. Interfaz inicial: menú de selección</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-2/3">
                <p>
                  Al acceder a Trade Map, encontrará un menú de selección que le permitirá filtrar la información según:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>País reportero (el país cuya información comercial desea analizar)</li>
                  <li>Productos (según el Sistema Armonizado)</li>
                  <li>Países socios (para análisis bilateral)</li>
                  <li>Período de tiempo (años y meses disponibles)</li>
                  <li>Tipo de flujo (exportaciones, importaciones o ambos)</li>
                </ul>
                <p className="mt-4">
                  La interfaz es intuitiva y permite realizar búsquedas rápidas con el autocompletado para países y productos.
                </p>
              </div>
              <div className="md:w-1/3">
                <img 
                  src="https://www.intracen.org/sites/default/files/inline-images/tm_selection.png" 
                  alt="Menú de selección de Trade Map" 
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>4. Análisis por producto</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-2/3">
                <p>
                  Trade Map permite realizar un análisis detallado por producto para:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Identificar mercados potenciales para un producto específico</li>
                  <li>Analizar la competencia internacional</li>
                  <li>Comparar el rendimiento exportador entre países</li>
                  <li>Revisar aranceles aplicados por diferentes mercados</li>
                </ul>
                <p className="mt-4">
                  Puede acceder a datos desglosados a diferentes niveles del Sistema Armonizado (2, 4 o 6 dígitos) 
                  y en algunos casos hasta 8 o 10 dígitos según la información proporcionada por cada país.
                </p>
              </div>
              <div className="md:w-1/3">
                <img 
                  src="https://www.intracen.org/sites/default/files/inline-images/tm_product_analysis.png" 
                  alt="Análisis por producto en Trade Map" 
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>5. Análisis por país</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-2/3">
                <p>
                  El análisis por país permite:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Examinar el portafolio exportador completo de un país</li>
                  <li>Identificar productos con mayor potencial</li>
                  <li>Analizar tendencias comerciales a lo largo del tiempo</li>
                  <li>Comparar el desempeño con países competidores</li>
                </ul>
                <p className="mt-4">
                  Los datos pueden visualizarse en forma de tablas, gráficos o mapas interactivos, facilitando 
                  la interpretación y el análisis estratégico para toma de decisiones.
                </p>
              </div>
              <div className="md:w-1/3">
                <img 
                  src="https://www.intracen.org/sites/default/files/inline-images/tm_country_analysis.png" 
                  alt="Análisis por país en Trade Map" 
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>6. Análisis bilateral</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-2/3">
                <p>
                  El análisis bilateral permite estudiar las relaciones comerciales entre dos países específicos:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Identificar productos con mayor intercambio comercial</li>
                  <li>Detectar oportunidades de negocio entre ambos mercados</li>
                  <li>Analizar balanzas comerciales y tendencias históricas</li>
                  <li>Comparar con relaciones bilaterales de otros países</li>
                </ul>
                <p className="mt-4">
                  Esta función es particularmente útil para exportadores que buscan oportunidades en mercados específicos 
                  y para analistas comerciales que estudian acuerdos bilaterales.
                </p>
              </div>
              <div className="md:w-1/3">
                <img 
                  src="https://www.intracen.org/sites/default/files/inline-images/tm_bilateral_trade.png" 
                  alt="Análisis bilateral en Trade Map" 
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>7. Comercio de servicios</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-2/3">
                <p>
                  Además del comercio de bienes, Trade Map ofrece información sobre comercio de servicios:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Datos sobre 12 categorías principales de servicios</li>
                  <li>Información para más de 180 países y territorios</li>
                  <li>Series temporales desde el año 2000</li>
                </ul>
                <p className="mt-4">
                  <strong>Limitaciones:</strong> La cobertura de datos de servicios es menos detallada que la de bienes 
                  y no todos los países proporcionan información completa o actualizada en este ámbito.
                </p>
              </div>
              <div className="md:w-1/3">
                <img 
                  src="https://www.intracen.org/sites/default/files/inline-images/tm_services_trade.png" 
                  alt="Comercio de servicios en Trade Map" 
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>8. Consejos y ejemplos reales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-2/3">
                <h3 className="font-semibold mb-2">Ejemplo: Análisis de exportación de sandías de Costa Rica</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Seleccionar Costa Rica como país reportero</li>
                  <li>Buscar "sandías" o usar el código 080711 del Sistema Armonizado</li>
                  <li>Examinar los principales mercados de destino</li>
                  <li>Analizar tendencias en valores y cantidades exportadas</li>
                  <li>Comparar con países competidores en la región</li>
                </ol>
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
                  <p className="font-semibold">Consejos prácticos:</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Utilice el botón "Descargar" para exportar datos a Excel</li>
                    <li>Guarde sus búsquedas frecuentes para acceso rápido</li>
                    <li>Combine análisis de Trade Map con otras herramientas del ITC como Market Access Map</li>
                    <li>Compare siempre múltiples años para identificar tendencias</li>
                  </ul>
                </div>
              </div>
              <div className="md:w-1/3">
                <img 
                  src="https://www.intracen.org/sites/default/files/inline-images/tm_watermelon_example.png" 
                  alt="Ejemplo de análisis de sandías en Trade Map" 
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-gray-500">
          © 2025 ComexToolbox | Tutorial de Trade Map | 
          <a href="/" className="text-blue-500 hover:underline ml-1">Volver al inicio</a>
        </p>
      </div>
    </div>
  );
}

export default TradeMap;
