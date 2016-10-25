---
layout: post
title: Learning Neo4j Database
---

### Motivation to use Neo4j

Here’s the thing. I need a database that works efficiently with graphs. Two people said neo4j is good, so I'm doing it!

Moving on...


### Installation:

I simply did `brew install neo4j` then `neo4j start` and finally went to the `http://localhost:7474/` for the build-in GUI. So far so good. It is great that this is all built in, and that there's also a tutorial.

Useful snippets:

```
CREATE (ee:Person { name: "Emil", from: "Sweden", klout: 99 })

- CREATE clause to create data
- () parenthesis to indicate a node
- ee:Person a variable 'ee' and label 'Person' for the new node
- {} brackets to add properties to the node

```

```
MATCH (ee:Person) WHERE ee.name = "Emil" RETURN ee;

- MATCH clause to specify a pattern of nodes and relationships
- (ee:Person) a single node pattern with label 'Person' which will assign matches to the variable 'ee'
- WHERE clause to constrain the results
- ee.name = "Emil" compares name property to the value "Emil"
- RETURN clause used to request particular results
```

### Creating the database
```
MATCH (ee:Person) WHERE ee.name = "Emil"
CREATE (js:Person { name: "Johan", from: "Sweden", learn: "surfing" }),
(ir:Person { name: "Ian", from: "England", title: "author" }),
(rvb:Person { name: "Rik", from: "Belgium", pet: "Orval" }),
(ally:Person { name: "Allison", from: "California", hobby: "surfing" }),
(ee)-[:KNOWS {since: 2001}]->(js),(ee)-[:KNOWS {rating: 5}]->(ir),
(js)-[:KNOWS]->(ir),(js)-[:KNOWS]->(rvb),
(ir)-[:KNOWS]->(js),(ir)-[:KNOWS]->(ally),
(rvb)-[:KNOWS]->(ally)
```


{: .center .large}
![Graph created by data inserted from a Neo4j example]({{ site.url }}/images/blog/neo4j_graph.png)

{: .media-caption}
Graph created by data inserted from a Neo4j example

### Example Queries

View everything in database
```
MATCH (n) RETURN n
```

Returns all people related to “Cloud Atlas”
```
MATCH (people:Person)-[relatedTo]-(:Movie {title: "Cloud Atlas"}) RETURN people.name, Type(relatedTo), relatedTo
```


Deleting everything in database:

```
MATCH (a:Person),(m:Movie) OPTIONAL MATCH (a)-[r1]-(), (m)-[r2]-() DELETE a,r1,m,r2
```

### Useful for 6 degrees of separation

Finds all connections 4 hops away from Kevin Bacon

```
MATCH (bacon:Person {name:"Kevin Bacon"})-[*1..4]-(hollywood)
RETURN DISTINCT hollywood
```

Finds shortest path between two people
```
MATCH p=shortestPath(
  (bacon:Person {name:"Kevin Bacon"})-[*]-(meg:Person {name:"Meg Ryan"})
)
RETURN p
```

_fin_
