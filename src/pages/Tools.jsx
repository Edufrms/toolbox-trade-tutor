
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Tools() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Herramientas ComexToolbox</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="bg-[#003366] text-white">
            <CardTitle>Trade Map</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="mb-4">
              Tutorial completo sobre cómo utilizar Trade Map para analizar flujos comerciales
              internacionales y encontrar oportunidades de mercado.
            </p>
            <Link 
              to="/tools/trademap" 
              className="bg-[#003366] hover:bg-[#00254d] text-white py-2 px-4 rounded block text-center"
            >
              Ver Tutorial
            </Link>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-8 text-center">
        <Link to="/" className="text-blue-600 hover:underline">
          Volver a la página principal
        </Link>
      </div>
    </div>
  );
}

export default Tools;
