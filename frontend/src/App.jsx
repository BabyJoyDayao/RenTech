import { useState } from 'react';
import KPICards from './components/KPICards';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import Catalog from './components/Catalog';
import ProductCard from './components/ProductCard';
import SearchAndFilter from './components/SearchAndFilter';
import Signup from './components/SignUp';
import Login from './components/Login';
import StaffManagement from './components/StaffManagement';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [extraUsers, setExtraUsers] = useState({});

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          RenTech Component Viewer
        </h1>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-600 mb-4 border-b pb-2">
            1. KPI Cards Component
          </h2>
          <KPICards />
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-600 mb-4 border-b pb-2">
            2. Analytics Dashboard Component
          </h2>
          <AnalyticsDashboard />
        </section>

        <Catalog />

        <ProductCard
          product={{
            name: "Pink Gown",
            price: 5000,
            status: "Available",
            category: "Gowns",
            image: "https://images.unsplash.com/photo-1566699265033-ad62ebca60ee?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }}
        />

        <SearchAndFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCategory={category}
          onCategoryChange={setCategory}
        />

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-600 mb-4 border-b pb-2">
            3. Login Component
          </h2>
          <Login
            onLogin={(role) => console.log(`Logged in as ${role}`)}
            onBack={() => console.log('Back pressed')}
          />
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-600 mb-4 border-b pb-2">
            4. Sign Up Component
          </h2>
          <Signup
            onLogin={(role) => console.log(`Logged in as ${role}`)}
            onBack={() => console.log('Back pressed')}
            onNavigateToLogin={() => console.log('Navigate to login')}
            extraUsers={extraUsers}
            setExtraUsers={setExtraUsers}
          />
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-600 mb-4 border-b pb-2">
            5. Staff Management Component
          </h2>
          <StaffManagement />
        </section>
      </div>
    </div>
  );
}

export default App;