
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function TradeMap() {
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
              Comenzar Ahora 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section id="que-es" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <svg className="text-[#003366] mr-3" width="28" height="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
            <h2 className="text-3xl font-bold text-[#003366]">
              1. ¿Qué es Trade Map?
            </h2>
          </div>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
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
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Persona analizando datos comerciales" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How to Register */}
      <section id="como-registrarse" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <svg className="text-[#003366] mr-3" width="28" height="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <h2 className="text-3xl font-bold text-[#003366]">
              2. Cómo registrarse y acceder
            </h2>
          </div>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Interfaz de registro de Trade Map" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
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
            </div>
          </div>
        </div>
      </section>

      {/* Initial Interface */}
      <section id="interfaz-inicial" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <svg className="text-[#003366] mr-3" width="28" height="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <h2 className="text-3xl font-bold text-[#003366]">
              3. Interfaz inicial: menú de selección
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <p className="text-lg text-gray-700 mb-6">
                    Al ingresar a Trade Map, encontrarás un completo menú de selección
                    que te permitirá configurar tus consultas para obtener datos
                    comerciales específicos:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 rounded p-4 border border-gray-200">
                      <h3 className="font-semibold text-[#003366] mb-2">
                        Selección de producto
                      </h3>
                      <p className="text-gray-700 text-sm">
                        Busca productos por código HS, categoría o descripción.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded p-4 border border-gray-200">
                      <h3 className="font-semibold text-[#003366] mb-2">
                        Selección de país
                      </h3>
                      <p className="text-gray-700 text-sm">
                        Elige un país específico o grupo regional.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded p-4 border border-gray-200">
                      <h3 className="font-semibold text-[#003366] mb-2">
                        Período temporal
                      </h3>
                      <p className="text-gray-700 text-sm">
                        Selecciona el rango de años para analizar.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded p-4 border border-gray-200">
                      <h3 className="font-semibold text-[#003366] mb-2">
                        Tipo de flujo
                      </h3>
                      <p className="text-gray-700 text-sm">
                        Importaciones, exportaciones o balanza comercial.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                    alt="Dashboard de Trade Map" 
                    className="rounded-lg shadow-lg w-full"
                  />
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
            <svg className="text-[#003366] mr-3" width="28" height="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3v18h18"></path>
              <path d="M18 17V9"></path>
              <path d="M13 17V5"></path>
              <path d="M8 17v-3"></path>
            </svg>
            <h2 className="text-3xl font-bold text-[#003366]">
              4. Análisis por producto
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                    alt="Análisis de productos en computadora" 
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold text-[#003366] mb-4">
                    Funciones principales
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex">
                      <span className="bg-[#003366] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                      <div>
                        <h4 className="font-medium text-[#003366]">Identificar mercados importadores</h4>
                        <p className="text-gray-700">Visualiza qué países importan más de tu producto.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="bg-[#003366] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                      <div>
                        <h4 className="font-medium text-[#003366]">Analizar competencia</h4>
                        <p className="text-gray-700">Descubre qué países exportan el mismo producto.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="bg-[#003366] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                      <div>
                        <h4 className="font-medium text-[#003366]">Evaluar aranceles</h4>
                        <p className="text-gray-700">Consulta los aranceles aplicados por cada país.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="bg-[#003366] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                      <div>
                        <h4 className="font-medium text-[#003366]">Comparar precios unitarios</h4>
                        <p className="text-gray-700">Compara los valores unitarios entre países.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Country Analysis */}
      <section id="analisis-pais" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <svg className="text-[#003366] mr-3" width="28" height="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M2 12h20"></path>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <h2 className="text-3xl font-bold text-[#003366]">
              5. Análisis por país
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <p className="text-lg text-gray-700 mb-6">
                  Trade Map ofrece herramientas potentes para analizar el portafolio
                  comercial completo de un país, lo que permite entender su perfil
                  exportador e importador:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-[#003366]">
                    <h3 className="text-xl font-semibold text-[#003366] mb-3">
                      Perfil exportador
                    </h3>
                    <p className="text-gray-700">
                      Visualiza los principales productos que exporta un país.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-[#003366]">
                    <h3 className="text-xl font-semibold text-[#003366] mb-3">
                      Perfil importador
                    </h3>
                    <p className="text-gray-700">
                      Identifica qué productos importa principalmente un país.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Análisis de comercio por país" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bilateral Analysis */}
      <section id="analisis-bilateral" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <svg className="text-[#003366] mr-3" width="28" height="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3v18h18"></path>
              <path d="m3 10 6 5 6-5"></path>
            </svg>
            <h2 className="text-3xl font-bold text-[#003366]">
              6. Análisis bilateral
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 text-center">
              El análisis bilateral en Trade Map te permite explorar a fondo
              las relaciones comerciales entre dos países, identificando
              oportunidades específicas de comercio:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-[#003366] mb-4">
                  Cómo realizar un análisis bilateral
                </h3>
                <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
                  <li>Selecciona "Bilateral trade" en el menú principal</li>
                  <li>Elige el país exportador (origen)</li>
                  <li>Selecciona el país importador (destino)</li>
                  <li>Define el período de tiempo para el análisis</li>
                  <li>Explora la tabla de productos comercializados</li>
                </ol>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <p className="text-sm text-yellow-700">
                    <strong>Consejo:</strong> Realiza el análisis en ambas direcciones 
                    para ver el flujo comercial completo.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-[#003366] mb-4">
                  Aplicaciones del análisis bilateral
                </h3>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-[#003366] mb-2">Identificar oportunidades</h4>
                    <p className="text-gray-700 text-sm">
                      Encuentra productos que un país importa de terceros pero no de tu país.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-[#003366] mb-2">Evaluar acuerdos comerciales</h4>
                    <p className="text-gray-700 text-sm">
                      Analiza el impacto de tratados de libre comercio.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-[#003366] mb-2">Comparar precios</h4>
                    <p className="text-gray-700 text-sm">
                      Compara los valores unitarios entre diferentes proveedores.
                    </p>
                  </div>
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
            <svg className="text-[#003366] mr-3" width="28" height="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M2 12h20"></path>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <h2 className="text-3xl font-bold text-[#003366]">
              7. Comercio de servicios
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 text-center">
              Además del comercio de bienes, Trade Map también ofrece datos
              sobre el comercio internacional de servicios:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-[#003366] mb-4">
                  Características del módulo de servicios
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Cobertura de 12 categorías principales de servicios</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Datos anuales de exportaciones e importaciones</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Información sobre principales socios comerciales</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    <span>Menor nivel de desagregación que para bienes</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-[#003366] mb-4">
                  Categorías de servicios disponibles
                </h3>
                <div className="grid grid-cols-1 gap-3">
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
                    <p className="text-[#003366] font-medium">4. Servicios financieros y de seguros</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-[#003366] font-medium">5. Servicios informáticos y digitales</p>
                  </div>
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
            <svg className="text-[#003366] mr-3" width="28" height="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M12 11V3"></path>
              <path d="M9 8h6"></path>
            </svg>
            <h2 className="text-3xl font-bold text-[#003366]">
              8. Consejos y ejemplos reales
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
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
              Visitar Trade Map
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
            <a 
              href="https://comextoolbox.com/tools"
              className="bg-[#FFD700] text-[#003366] hover:bg-[#F4C430] transition-colors font-bold rounded-md px-6 py-3 flex items-center justify-center gap-2"
            >
              Explorar más herramientas
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
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
}

export default TradeMap;
