import { useState, useEffect } from 'react';
import { Bell, X, Info, Sparkles, Wrench, BookOpen } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Update {
  id: string;
  date: string;
  heure: string;
  titre: string;
  description: string;
  type: 'feature' | 'fix' | 'content';
}

export const UpdateNotes = () => {
  const [updates, setUpdates] = useState<Update[]>([]);
  const [hasNew, setHasNew] = useState(false);

  useEffect(() => {
    fetch('/updates.json')
      .then(res => res.json())
      .then(data => {
        setUpdates(data);
        const lastSeen = localStorage.getItem('lastUpdateSeen');
        if (data.length > 0 && lastSeen !== data[0].id) {
          setHasNew(true);
        }
      })
      .catch(err => console.error("Error loading updates:", err));
  }, []);

  const markAsSeen = () => {
    if (updates.length > 0) {
      localStorage.setItem('lastUpdateSeen', updates[0].id);
      setHasNew(false);
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'feature': return <Sparkles size={16} className="text-amber-500" />;
      case 'fix': return <Wrench size={16} className="text-blue-500" />;
      case 'content': return <BookOpen size={16} className="text-emerald-500" />;
      default: return <Info size={16} className="text-gray-500" />;
    }
  };

  return (
    <Dialog onOpenChange={(open) => { if (open) markAsSeen(); }}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="relative h-10 w-10 text-gray-600 hover:text-emerald-600">
          <Bell size={20} />
          {hasNew && (
            <span className="absolute top-2 right-2 w-3 h-3 bg-red-500 border-2 border-white rounded-full animate-bounce"></span>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-playfair text-2xl flex items-center gap-2">
            <Bell className="text-emerald-600" />
            Notes de mise à jour
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 mt-4">
          {updates.map((update) => (
            <div key={update.id} className="relative pl-6 border-l-2 border-gray-100 pb-2">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white border-2 border-emerald-500 rounded-full"></div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono text-gray-400 bg-gray-50 px-2 py-0.5 rounded">
                  {update.date} à {update.heure}
                </span>
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-gray-100 text-[10px] font-bold uppercase text-gray-600">
                  {getTypeIcon(update.type)}
                  {update.type}
                </div>
              </div>
              <h4 className="font-poppins font-bold text-gray-900">{update.titre}</h4>
              <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                {update.description}
              </p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
