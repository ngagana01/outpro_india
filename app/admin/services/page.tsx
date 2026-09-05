"use client";

import { useEffect, useState } from "react";

type Service = {
  id: string;
  title: string;
  slug: string;
  description: string;
  content?: string | null;
  icon?: string | null;
  featured: boolean;
};

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadServices() {
    try {
      const response = await fetch("/api/services");

      if (!response.ok) {
        throw new Error("Failed to load services");
      }

      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadServices();
  }, []);

  function handleAddService() {
    alert("Add Service button is working!");
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 flex items-center justify-between">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
            CMS
          </p>

          <h1 className="text-4xl font-bold text-white">
            Services
          </h1>

          <p className="mt-3 text-white/60">
            Manage your Outpro.India services.
          </p>
        </div>

        <button
          type="button"
          onClick={handleAddService}
          className="rounded-full bg-lime-400 px-6 py-3 font-semibold text-black hover:bg-lime-300"
        >
          + Add Service
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
        {loading ? (
          <div className="p-8 text-center text-white/60">
            Loading services...
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10 text-left">
                <th className="px-6 py-5 text-white">
                  Title
                </th>

                <th className="px-6 py-5 text-white">
                  Slug
                </th>

                <th className="px-6 py-5 text-white">
                  Featured
                </th>
              </tr>
            </thead>

            <tbody>
              {services.map((service) => (
                <tr
                  key={service.id}
                  className="border-b border-white/10"
                >
                  <td className="px-6 py-5 text-white">
                    {service.title}
                  </td>

                  <td className="px-6 py-5 text-white/60">
                    {service.slug}
                  </td>

                  <td className="px-6 py-5 text-white">
                    {service.featured ? "Yes" : "No"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {!loading && services.length === 0 && (
          <div className="p-8 text-center text-white/60">
            No services found.
          </div>
        )}
      </div>
    </main>
  );
}