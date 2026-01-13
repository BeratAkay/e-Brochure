import { motion } from "framer-motion";

export function PhoneMockup() {
  return (
    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
      <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-gray-800 relative">
        
        {/* Screen Content */}
        <div className="w-full h-full bg-slate-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-primary h-32 rounded-b-3xl relative shrink-0">
             <div className="absolute -bottom-6 left-6 w-16 h-16 bg-white rounded-full shadow-lg p-1">
                {/* Unsplash Avatar */}
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop" 
                  alt="Avatar"
                  className="w-full h-full rounded-full object-cover"
                />
             </div>
          </div>
          
          <div className="px-6 pt-8 pb-4">
             <h3 className="font-bold text-lg text-slate-800 mt-2">Summer Collection</h3>
             <p className="text-xs text-slate-500">Exclusive deals just for you.</p>
          </div>

          {/* Catalog Items */}
          <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-3 no-scrollbar">
             {[1, 2, 3].map((item) => (
               <motion.div 
                 key={item}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: item * 0.2 }}
                 className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex gap-3"
               >
                 <div className="w-16 h-16 bg-slate-100 rounded-lg shrink-0 overflow-hidden">
                    {/* Placeholder product image */}
                    <img 
                      src={`https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop&q=80`}
                      alt="Product"
                      className="w-full h-full object-cover"
                    />
                 </div>
                 <div className="flex flex-col justify-center">
                   <div className="h-3 w-24 bg-slate-200 rounded mb-2"></div>
                   <div className="h-2 w-16 bg-slate-100 rounded"></div>
                   <div className="mt-2 text-primary font-bold text-xs">$49.00</div>
                 </div>
               </motion.div>
             ))}
             
             <div className="bg-accent/10 p-4 rounded-xl mt-4">
               <p className="text-center text-accent font-medium text-sm">Tap to view full catalog</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
