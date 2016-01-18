# How to use the CLI utility

```
npm install ddc
```

```
./node_modules/bin/ddc suggest
./node_modules/bin/ddc create
./node_modules/bin/ddc tag
```

# Distributed Developer Collaboration

 * Push to remote, any remote, a colleague's/team's/organization's. Typically https.
 * A remote is responsible for authentication. This isn't purely peer-to-peer so something needs to be centralized.
 * Build cluster is one remote
 * A central often pushes automatically to a build cluster
 * Build is a docker run, meaning we have a build process with a controlled environment, not all the setup you need for a typical build server
 * Build is configured by a .-file in each module
 * Builds either npm install (to sinopa etc) or docker install (to private repo usually)
 * Origins may support automatically organization and repo creation, do `git remote add name url` and `git push name branch` and you're there (typically authenticated access)
 * Issues/tickets are branches with a branch readme (markdown)
 * [Frontmatter](http://jekyllrb.com/docs/frontmatter/) of branch readme has a Status field
 * Typical branch statuses: `wip` (default), `pr`/`mr`, `wontfix`
 * Readme is versioned with commits, can be the only change in a commit (such commits ideally distinguishable by )
 * Merge to master typically does not affect branch status. It's a simple indexing operation to see which branches are merged.

For team communication you also need a chat. The chat should be able to set topic to a remote+repo+branch. You can start and end a topic. You can also use a topic for a single post. Chat history should be archived and retrievable per topic.

Non-technical collaboration is done through documents. Any documentation system. Any file sharing. Can be peer-to-peer through tools like Syncthing. Peer-to-peer inherently has the easiest type of access control: anyone with access can grant access to anyone else. Keep shares small!
