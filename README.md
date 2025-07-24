Using nextjs

Focusing app/(private)/admin/product

Following to clean architecture: Service => Hook => UI

Applied SOLID principles: 
1. UI only render UI. Hook only handle state logic. Service only manage API => S
2. Create prodcut and edit product handled different hooks, so they don't denpend on logic. Each one handle different logic without checking if/else => S
3. Called services in hook => Services don't depend on UI => D
4. Scalable button and input components that can be extended without modifying their original code...=> O/P, L
5. Don't pass redundant state, props or types => I

If I have any mistakes, please let me know. I always try to improve everything.
