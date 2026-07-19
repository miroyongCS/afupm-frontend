'use client';

import { eventsData } from '@/data/mock-events';

export default function EventsSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Próximos Eventos</h2>
        <div className="space-y-6">
          {eventsData.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-2">📅 {event.date}</p>
                <p className="text-gray-700">{event.description}</p>
              </div>
              <button className="mt-4 md:mt-0 md:ml-6 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition">
                Inscrever-se
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
