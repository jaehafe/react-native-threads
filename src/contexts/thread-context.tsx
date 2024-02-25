import * as React from 'react';
import { Thread } from '@/src/types/threads';
import { generateThreads } from '@/src/utils/generate-dommy-data';

interface ThreadContextType {
  threads: Thread[];
}

export const ThreadsContext = React.createContext<ThreadContextType | null>(null);

export default function ThreadsContextProvider({ children }: React.PropsWithChildren) {
  const [threads, setThreads] = React.useState<Thread[]>([]);

  React.useEffect(() => {
    setThreads(generateThreads());
  }, []);

  const threadValue = {
    threads,
  };

  return <ThreadsContext.Provider value={threadValue}>{children}</ThreadsContext.Provider>;
}

export function useThreadContext() {
  const threadContext = React.useContext(ThreadsContext);

  if (threadContext === null || threadContext === undefined) {
    throw new Error('useAuthContext는 Auth Provider 안에서 사용해야 합니다.');
  }
  return threadContext;
}
