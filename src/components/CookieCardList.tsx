import type { Cookie } from "@/data/cookies";

interface CookieCardListProps {
  cookie: Cookie;
}

const CookieCardList = ({ cookie }: CookieCardListProps) => {
  return (
    <div className="flex items-center gap-3 border-b border-border/50 py-3 last:border-b-0">
      <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-full">
        <img 
          src={cookie.image} 
          alt={cookie.name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col min-w-0">
        <h3 className="text-sm font-bold text-foreground">{cookie.name}</h3>
        <p className="text-xs text-muted-foreground line-clamp-1">
          {cookie.shortDescription}
        </p>
        <span className="text-[10px] text-muted-foreground">Aprox. {cookie.weight}</span>
      </div>
      <span className="flex-shrink-0 text-sm font-bold text-primary">{cookie.price}</span>
    </div>
  );
};

export default CookieCardList;
