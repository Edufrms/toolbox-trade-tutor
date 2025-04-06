
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  BarChart3,
  Globe,
  Search,
  Users,
  LineChart,
  Lightbulb,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const TradeMap = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="bg-[#003366] text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            ComexToolbox
          </Link>
          <div className="hidden md:flex gap-6">
            <Link to="/" className="hover:text-[#FFD700]">
              Home
            </Link>
            <Link to="/tools" className="hover:text-[#FFD700]">
              Tools
            </Link>
            <a
              href="https://comextoolbox.com"
              className="hover:text-[#FFD700]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Main Site
            </a>
          </div>
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-[#003366] to-[#004080] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Trade Map Tutorial
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Aprende a utilizar Trade Map para analizar flujos comerciales y
            encontrar oportunidades de mercado en el comercio internacional
          </p>
          <div className="flex justify-center">
            <Button className="bg-[#FFD700] hover:bg-[#F4C430] text-[#003366] font-bold rounded-md px-6 py-3 flex items-center gap-2">
              Comenzar Ahora <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section id="que-es" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <BookOpen className="text-[#003366] mr-3" size={28} />
            <h2 className="text-3xl font-bold text-[#003366]">
              1. ¿Qué es Trade Map?
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Trade Map es una herramienta en línea desarrollada por el Centro
              de Comercio Internacional (ITC) que proporciona acceso a la base
              de datos comercial más grande del mundo. Permite a los usuarios:
            </p>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 mb-6">
              <li>
                Analizar tendencias comerciales internacionales actuales
              </li>
              <li>
                Visualizar flujos bilaterales de comercio entre países
              </li>
              <li>
                Identificar mercados potenciales para productos específicos
              </li>
              <li>
                Comparar el rendimiento de las exportaciones o las ventajas
                comparativas con países competidores
              </li>
            </ul>
            <p className="text-lg text-gray-700">
              Esta herramienta es fundamental para empresas exportadoras,
              instituciones de apoyo al comercio, gobiernos y académicos que
              buscan entender los flujos comerciales y descubrir oportunidades
              en mercados internacionales.
            </p>
          </div>
        </div>
      </section>

      {/* How to Register */}
      <section id="como-registrarse" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <Users className="text-[#003366] mr-3" size={28} />
            <h2 className="text-3xl font-bold text-[#003366]">
              2. Cómo registrarse y acceder
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-[#003366] mb-4">
                Proceso de registro
              </h3>
              <ol className="list-decimal list-inside space-y-4 text-gray-700">
                <li>
                  <span className="font-medium">Visita el sitio web oficial:</span> 
                  Navega a{" "}
                  <a
                    href="https://www.trademap.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    www.trademap.org
                  </a>
                </li>
                <li>
                  <span className="font-medium">Haz clic en "Register":</span> Se
                  encuentra en la esquina superior derecha de la página
                </li>
                <li>
                  <span className="font-medium">Completa el formulario:</span> Ingresa
                  tu información personal, incluyendo nombre, correo electrónico
                  y país
                </li>
                <li>
                  <span className="font-medium">Verifica tu correo:</span> Recibirás
                  un correo con un enlace de verificación
                </li>
                <li>
                  <span className="font-medium">Confirma tu cuenta:</span> Haz clic
                  en el enlace de verificación y establece una contraseña
                </li>
              </ol>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-[#003366] mb-4">
                Acceso y primeros pasos
              </h3>
              <p className="text-gray-700 mb-4">
                Después de registrarte, podrás iniciar sesión usando tu correo y
                contraseña. La pantalla de inicio te dará la bienvenida con un
                menú de opciones para comenzar tu análisis comercial.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      <strong>Nota:</strong> Para usuarios en países en desarrollo,
                      Trade Map ofrece acceso gratuito. Para otros usuarios, puede
                      requerirse una suscripción.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Initial Interface */}
      <section id="interfaz-inicial" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <Search className="text-[#003366] mr-3" size={28} />
            <h2 className="text-3xl font-bold text-[#003366]">
              3. Interfaz inicial: menú de selección
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Al ingresar a Trade Map, encontrarás un completo menú de selección
              que te permitirá configurar tus consultas para obtener datos
              comerciales específicos:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-5 border border-gray-200">
                <h3 className="text-xl font-semibold text-[#003366] mb-3">
                  Selección de producto
                </h3>
                <p className="text-gray-700">
                  Puedes buscar productos por código HS, categoría o descripción.
                  Trade Map utiliza la nomenclatura del Sistema Armonizado (HS)
                  con diferentes niveles de especificidad (2, 4 o 6 dígitos).
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-5 border border-gray-200">
                <h3 className="text-xl font-semibold text-[#003366] mb-3">
                  Selección de país
                </h3>
                <p className="text-gray-700">
                  Elige un país específico o grupo regional para analizar sus
                  importaciones o exportaciones. Puedes seleccionar "World" para
                  obtener datos globales.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-5 border border-gray-200">
                <h3 className="text-xl font-semibold text-[#003366] mb-3">
                  Período temporal
                </h3>
                <p className="text-gray-700">
                  Selecciona el rango de años que deseas analizar. Trade Map
                  permite comparar datos históricos para identificar tendencias
                  a lo largo del tiempo.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-5 border border-gray-200">
                <h3 className="text-xl font-semibold text-[#003366] mb-3">
                  Tipo de flujo
                </h3>
                <p className="text-gray-700">
                  Especifica si quieres analizar importaciones, exportaciones o
                  balanza comercial entre países y productos seleccionados.
                </p>
              </div>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    <strong>Consejo:</strong> Utiliza los filtros avanzados para
                    refinar aún más tu búsqueda y obtener datos más específicos.
                    Estos incluyen opciones para filtrar por valor, cantidad,
                    crecimiento y otros indicadores comerciales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Analysis */}
      <section id="analisis-producto" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <BarChart3 className="text-[#003366] mr-3" size={28} />
            <h2 className="text-3xl font-bold text-[#003366]">
              4. Análisis por producto
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Trade Map te permite realizar un análisis detallado por producto,
              lo que es esencial para identificar oportunidades comerciales
              y entender la competencia:
            </p>
            
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-[#003366] mb-4">
                Funciones principales
              </h3>
              <ul className="space-y-4">
                <li className="flex">
                  <span className="bg-[#003366] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                  <div>
                    <h4 className="font-medium text-[#003366]">Identificar mercados importadores</h4>
                    <p className="text-gray-700">Visualiza qué países importan más de tu producto y cuáles muestran mayor crecimiento en la demanda.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-[#003366] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                  <div>
                    <h4 className="font-medium text-[#003366]">Analizar competencia</h4>
                    <p className="text-gray-700">Descubre qué países exportan el mismo producto, sus volúmenes y valores de exportación.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-[#003366] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                  <div>
                    <h4 className="font-medium text-[#003366]">Evaluar aranceles</h4>
                    <p className="text-gray-700">Consulta los aranceles aplicados por cada país importador para tu producto específico.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-[#003366] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                  <div>
                    <h4 className="font-medium text-[#003366]">Comparar precios unitarios</h4>
                    <p className="text-gray-700">Compara los valores unitarios de exportación entre diferentes países para posicionar tu producto.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-[#003366] mb-4">
                Cómo realizar el análisis
              </h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>Selecciona "Product" en el menú principal</li>
                <li>Busca y selecciona el producto de interés por código o descripción</li>
                <li>Elige entre "Exportaciones" o "Importaciones" según tu análisis</li>
                <li>Selecciona el país o región de referencia</li>
                <li>Define el periodo temporal a analizar</li>
                <li>Explora las tablas y gráficos generados con los datos comerciales</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Country Analysis */}
      <section id="analisis-pais" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <Globe className="text-[#003366] mr-3" size={28} />
            <h2 className="text-3xl font-bold text-[#003366]">
              5. Análisis por país
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Trade Map ofrece herramientas potentes para analizar el portafolio
              comercial completo de un país, lo que permite entender su perfil
              exportador e importador:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-[#003366]">
                <h3 className="text-xl font-semibold text-[#003366] mb-3">
                  Perfil exportador
                </h3>
                <p className="text-gray-700">
                  Visualiza los principales productos que exporta un país, sus
                  destinos más importantes y la evolución de estas exportaciones
                  en el tiempo.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-[#003366]">
                <h3 className="text-xl font-semibold text-[#003366] mb-3">
                  Perfil importador
                </h3>
                <p className="text-gray-700">
                  Identifica qué productos importa principalmente un país y
                  cuáles son sus proveedores más relevantes, detectando posibles
                  oportunidades.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-[#003366] mb-4">
                Indicadores clave
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th className="py-3 px-4 bg-[#003366] text-white text-left">Indicador</th>
                      <th className="py-3 px-4 bg-[#003366] text-white text-left">Descripción</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4 font-medium">RCA</td>
                      <td className="py-3 px-4">Ventaja comparativa revelada, muestra la especialización exportadora del país</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Crecimiento</td>
                      <td className="py-3 px-4">Tasas de crecimiento anual de las exportaciones e importaciones</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Diversificación</td>
                      <td className="py-3 px-4">Concentración o diversificación de mercados y productos</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Balanza comercial</td>
                      <td className="py-3 px-4">Superávit o déficit comercial por producto y socio</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#003366] mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd"></path>
                </svg>
                Caso práctico
              </h3>
              <p className="text-gray-700 mb-4">
                Para analizar el perfil exportador de Costa Rica:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Selecciona "Country" en el menú principal</li>
                <li>Elige "Costa Rica" de la lista de países</li>
                <li>Selecciona "Exports" para ver su perfil exportador</li>
                <li>Observa la tabla de productos exportados ordenada por valor</li>
                <li>Identifica productos con ventaja comparativa (RCA > 1)</li>
                <li>Analiza tendencias de crecimiento de los principales productos</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Bilateral Analysis */}
      <section id="analisis-bilateral" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <LineChart className="text-[#003366] mr-3" size={28} />
            <h2 className="text-3xl font-bold text-[#003366]">
              6. Análisis bilateral
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              El análisis bilateral en Trade Map te permite explorar a fondo
              las relaciones comerciales entre dos países, identificando
              oportunidades específicas de comercio:
            </p>
            
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-[#003366] mb-4">
                Cómo realizar un análisis bilateral
              </h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
                <li>Selecciona "Bilateral trade" en el menú principal</li>
                <li>Elige el país exportador (origen)</li>
                <li>Selecciona el país importador (destino)</li>
                <li>Define el período de tiempo para el análisis</li>
                <li>Explora la tabla de productos comercializados entre ambos países</li>
              </ol>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-sm text-yellow-700">
                  <strong>Nota:</strong> Para un análisis completo, es recomendable
                  realizar el análisis en ambas direcciones (país A → país B y
                  país B → país A) para identificar el flujo comercial en ambos sentidos.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-[#003366] mb-4">
                Aplicaciones del análisis bilateral
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-[#003366] mb-2">Identificar oportunidades</h4>
                  <p className="text-gray-700 text-sm">
                    Encuentra productos que un país importa de terceros pero no del
                    socio analizado, revelando posibles nuevas exportaciones.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-[#003366] mb-2">Evaluar acuerdos comerciales</h4>
                  <p className="text-gray-700 text-sm">
                    Analiza el impacto de tratados de libre comercio en los flujos
                    bilaterales entre países socios.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-[#003366] mb-2">Comparar precios</h4>
                  <p className="text-gray-700 text-sm">
                    Compara los valores unitarios de productos entre diferentes
                    proveedores para identificar ventajas competitivas.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-[#003366] mb-2">Analizar complementariedad</h4>
                  <p className="text-gray-700 text-sm">
                    Determina la compatibilidad entre la oferta exportable de un
                    país y la demanda de importaciones del otro.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Trade */}
      <section id="comercio-servicios" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <Globe className="text-[#003366] mr-3" size={28} />
            <h2 className="text-3xl font-bold text-[#003366]">
              7. Comercio de servicios
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Además del comercio de bienes, Trade Map también ofrece datos
              sobre el comercio internacional de servicios, aunque con algunas
              limitaciones en comparación con los datos de mercancías:
            </p>
            
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-[#003366] mb-4">
                Características del módulo de servicios
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Cobertura de 12 categorías principales de servicios según clasificación BPM6</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Datos anuales de exportaciones e importaciones de servicios</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Información sobre principales socios comerciales por tipo de servicio</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span>Menor nivel de desagregación que para bienes (sin códigos de 6 dígitos)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span>Cobertura de países más limitada que para el comercio de bienes</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-[#003366] mb-4">
                Categorías de servicios disponibles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-[#003366] font-medium">1. Servicios de manufactura</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-[#003366] font-medium">2. Servicios de transporte</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-[#003366] font-medium">3. Servicios de viajes</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-[#003366] font-medium">4. Servicios de construcción</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-[#003366] font-medium">5. Servicios financieros</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-[#003366] font-medium">6. Servicios de seguros</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-[#003366] font-medium">7. Servicios informáticos</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-[#003366] font-medium">8. Propiedad intelectual</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-[#003366] font-medium">9. Servicios empresariales</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-[#003366] font-medium">10. Servicios personales y culturales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips and Examples */}
      <section id="consejos-ejemplos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <Lightbulb className="text-[#003366] mr-3" size={28} />
            <h2 className="text-3xl font-bold text-[#003366]">
              8. Consejos y ejemplos reales
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-[#003366] mb-4">
                  Caso de estudio: Sandías de Costa Rica
                </h3>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    Costa Rica es un exportador importante de sandías. Utilizando
                    Trade Map podemos analizar:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Los principales mercados de destino (EE.UU., Países Bajos, Reino Unido)</li>
                    <li>Crecimiento de las exportaciones en los últimos 5 años</li>
                    <li>Precios unitarios en diferentes mercados</li>
                    <li>Competidores principales (México, Guatemala, Honduras)</li>
                  </ul>
                  <p className="mb-4">
                    Este análisis permite identificar mercados donde Costa Rica 
                    tiene una ventaja comparativa y detectar nuevos mercados potenciales
                    donde hay demanda creciente por este producto.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Resultado del análisis:</strong> Se identificó que el mercado
                      asiático, especialmente Japón y Corea del Sur, paga precios unitarios 
                      hasta 30% superiores por sandías de alta calidad, representando 
                      una oportunidad de diversificación para los exportadores costarricenses.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-[#003366] mb-4">
                  Consejos para un análisis efectivo
                </h3>
                <div className="space-y-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <span className="flex items-center justify-center h-8 w-8 rounded-full bg-[#003366] text-white font-bold">1</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-[#003366]">Combina diferentes niveles de agregación</h4>
                      <p className="text-gray-700">
                        Comienza con análisis a 2 dígitos para identificar sectores, 
                        luego profundiza a 4 y 6 dígitos para productos específicos.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <span className="flex items-center justify-center h-8 w-8 rounded-full bg-[#003366] text-white font-bold">2</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-[#003366]">Utiliza múltiples indicadores</h4>
                      <p className="text-gray-700">
                        No te limites al valor comercial. Analiza crecimiento, participación 
                        de mercado, valores unitarios y ventajas comparativas.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <span className="flex items-center justify-center h-8 w-8 rounded-full bg-[#003366] text-white font-bold">3</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-[#003366]">Exporta y visualiza datos</h4>
                      <p className="text-gray-700">
                        Aprovecha la función de exportación a Excel para análisis más 
                        profundos y la creación de gráficos personalizados.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <span className="flex items-center justify-center h-8 w-8 rounded-full bg-[#003366] text-white font-bold">4</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-[#003366]">Cruza información con otras fuentes</h4>
                      <p className="text-gray-700">
                        Complementa el análisis con datos de Market Access Map para 
                        aranceles y Trade Competitiveness Map para competitividad.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#003366] to-[#004080] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para dominar Trade Map?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Utiliza esta guía para comenzar a explorar las oportunidades
            comerciales que Trade Map puede revelar para tu empresa o análisis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.trademap.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#003366] hover:bg-[#FFD700] transition-colors font-bold rounded-md px-6 py-3 flex items-center justify-center gap-2"
            >
              Visitar Trade Map <ExternalLink size={16} />
            </a>
            <a 
              href="https://comextoolbox.com/tools"
              className="bg-[#FFD700] text-[#003366] hover:bg-[#F4C430] transition-colors font-bold rounded-md px-6 py-3 flex items-center justify-center gap-2"
            >
              Explorar más herramientas <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#002347] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4">ComexToolbox</h3>
              <p className="text-gray-300 max-w-md">
                Herramientas y recursos para profesionales del comercio internacional
                y empresas que buscan expandir sus oportunidades de negocio global.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link to="/tools" className="text-gray-300 hover:text-white">
                    Herramientas
                  </Link>
                </li>
                <li>
                  <a
                    href="https://comextoolbox.com"
                    className="text-gray-300 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sitio principal
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} ComexToolbox. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TradeMap;
