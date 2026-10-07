import { useNavigate } from 'react-router-dom';
import { stars } from '../data/data';
import Card from '../components/Card';

export default function Stars() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen pt-24 pb-16 px-6 lg:px-10 max-w-7xl mx-auto page-enter">

      <div className="mb-12">
        <p className="text-ember text-[10px] font-bold uppercase tracking-[0.28em] mb-2">
          Creators
        </p>
        <h1
          style={{ fontFamily:"'Bebas Neue',cursive", letterSpacing:'0.05em' }}
          className="text-5xl sm:text-6xl text-white"
        >
          Browse Stars
        </h1>
        <p className="text-ghost text-sm mt-1">{stars.length} creators · Tap to watch</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4
                      lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {stars.map((star, i) => (
          <div
            key={star.id}
            className="animate-scale-in"
            style={{ animationDelay:`${i * 55}ms`, animationFillMode:'both' }}
          >
            <Card
              thumbnail={star.thumbnail}
              name={star.name}
              onClick={() => navigate(`/stars/${star.id}`)}
            />
          </div>
        ))}
      </div>
    </main>
  );
}