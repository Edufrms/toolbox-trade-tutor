
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Header */}
      <header className="bg-[#003366] text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">ComexToolbox</Link>
          <nav className="hidden md:flex gap-6">
            <Link to="/" className="hover:text-[#FFD700]">Inicio</Link>
            <a href="https://comextoolbox.com" className="hover:text-[#FFD700]" target="_blank" rel="noopener noreferrer">Sitio Principal</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-[#003366] to-[#004080] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tutoriales de Comercio Internacional</h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Guías paso a paso para aprender a utilizar las principales herramientas
            de análisis en comercio internacional
          </p>
        </div>
      </section>

      {/* Tutorial Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#003366] mb-12">Tutoriales Disponibles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Trade Map</CardTitle>
                <CardDescription>Analiza flujos comerciales y mercados potenciales</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Aprende a utilizar esta herramienta del ITC para analizar
                  exportaciones, importaciones y descubrir oportunidades comerciales.
                </p>
                <Link to="/tools/trademap">
                  <Button className="w-full bg-[#003366] hover:bg-[#002347]">
                    Ver Tutorial
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="opacity-75">
              <CardHeader>
                <CardTitle>Market Access Map</CardTitle>
                <CardDescription>Consulta aranceles y barreras comerciales</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Próximamente: guía completa para consultar aranceles, cuotas y
                  otras medidas que afectan a las exportaciones.
                </p>
                <Button className="w-full bg-gray-400" disabled>
                  Próximamente
                </Button>
              </CardContent>
            </Card>

            <Card className="opacity-75">
              <CardHeader>
                <CardTitle>Export Potential Map</CardTitle>
                <CardDescription>Identifica potencial exportador no aprovechado</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Próximamente: descubre cómo identificar productos y mercados con 
                  mayor potencial para tus exportaciones.
                </p>
                <Button className="w-full bg-gray-400" disabled>
                  Próximamente
                </Button>
              </CardContent>
            </Card>
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
                  <Link to="/tools/trademap" className="text-gray-300 hover:text-white">
                    Tutorial Trade Map
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

export default Index;
