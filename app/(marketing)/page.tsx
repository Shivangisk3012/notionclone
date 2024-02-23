
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Heros } from './_component/Heros';
const MarketingPage=()=> {
  return (
    <div className="h-full flex flex-col pt-20">
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Your Ideas, Documents & plans, all in one place
            ,<br></br>Welcome to <span className="underline">Jotion</span>
          </h1>
          <p className="mt-4 text-xl mb-4">
            Jotion is the  connected workspace for your notes, tasks, wikis, and databases.
          </p>
          <Button>
            Enter Jotion
            <ArrowRight></ArrowRight>
          </Button>
          <Heros/>
          
        </div>
      </div>

</div>
);
}
export default MarketingPage;