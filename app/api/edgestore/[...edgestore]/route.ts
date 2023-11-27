import { initEdgeStore } from "@edgestore/server";
import { createEdgeStoreNextHandler } from "@edgestore/server/adapters/next/app";
const es = initEdgeStore.create();

////

const edgeStoreRouter = es.router({
  publicFiles: es.fileBucket().beforeDelete(() => {
    return true;
  })
});

export type EdgeStoreRouter = typeof edgeStoreRouter;

////

const handler = createEdgeStoreNextHandler({
  router: edgeStoreRouter
});

export { handler as GET, handler as POST };
