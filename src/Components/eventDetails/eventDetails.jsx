import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { FaBook } from "react-icons/fa";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(
          `https://ingenium-web-2.onrender.com/api/v1/events/${id}`
        );
        setEvent(response.data.data);
      } catch (error) {
        console.error("Error fetching event:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [id]);

  if (loading) {
    return <div className="text-white text-center pt-20">Loading...</div>;
  }

  if (!event) {
    return <div className="text-white text-center pt-20">Event not found.</div>;
  }

  return (
    <section className="bg-black text-white min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/" className="text-colPink hover:underline">
            &larr; Back
          </Link>
        </div>

        {/* Event Header */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/2">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-primaryFont text-3xl sm:text-4xl md:text-5xl lg:text-7xl uppercase">
              {event.title}
            </h1>
            {/* Date & Time */}
            <div className="flex gap-4 text-sm sm:text-base text-gray-300">
              <span>{event.date}</span>
              <span>{event.time}</span>
            </div>
            <p className="font-secFont1 text-base sm:text-lg md:text-xl">
              {event.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 text-sm sm:text-base">
              <p>
                <span className="font-semibold">Meeting: </span>
                {event.meetingType}
              </p>
              <p>
                <span className="font-semibold">Registration: </span>
                {event.registrationPeriod}
              </p>
            </div>
          </div>
        </div>

        {/* Long Description */}
        <div className="my-12">
          <p className="font-secFont1 text-base sm:text-lg md:text-xl leading-relaxed">
            {event.longDescription}
          </p>
        </div>

        {/* Additional Information: Rules and How to Apply */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Rules Section */}
          {event.rules && event.rules.length > 0 && (
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-4 bg-colPink p-3 rounded-t-lg">
                <FaBook className="text-3xl" />
                <h2 className="font-primaryFont text-2xl">Rule Book</h2>
              </div>
              <ul className="bg-gray-800 p-6 rounded-b-lg space-y-2">
                {event.rules.map((rule, index) => (
                  <li key={index} className="text-sm sm:text-base">
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* How to Apply Section */}
          {event.howToApply && event.howToApply.length > 0 && (
            <div className="w-full md:w-1/2">
              <h2 className="font-primaryFont text-2xl mb-4">How to Apply?</h2>
              <ol className="list-decimal ml-6 space-y-2">
                {event.howToApply.map((step, index) => (
                  <li key={index} className="text-sm sm:text-base">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>

        {/* Related Events */}
        {event.relatedEvents && event.relatedEvents.length > 0 && (
          <div className="mt-12">
            <h2 className="font-primaryFont text-3xl mb-6">Explore more</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {event.relatedEvents.map((relatedEvent) => (
                <Link
                  key={relatedEvent.id}
                  to={`/eventdetails/${relatedEvent.id}`}
                  className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                >
                  <img
                    src={relatedEvent.image}
                    alt={relatedEvent.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="font-primaryFont text-xl">
                      {relatedEvent.title}
                    </p>
                    <p className="text-sm text-gray-300">
                      {relatedEvent.category}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventDetails;
