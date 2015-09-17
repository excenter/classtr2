var G3 = jsnx.Graph();

G3.add_nodes_from([1,2,3,4,5,6,7,8,9], {group:0});
G3.add_nodes_from([10,11,12,13,14,15,16,17,18], {group:1});
G3.add_nodes_from([19,20], {group:2});

G3.add_path([1,2,3,4,5,6,7,8,9,1]);
G3.add_edges_from([[1,10],[2,11],[3,12],[4,13],[5,14],[6,15],[7,16],[8,17],[9,18]]);
G3.add_edges_from([[10,11],[11,12],[13,14],[14,15],[16,17],[17,18]]);
G3.add_edges_from([[9,19],[12,19],[15,19],[11,20],[14,20],[17,20]]);

var color = d3.scale.category20();
jsnx.draw(G3, {
    element: '#chart3',
    layout_attr: {
        charge: -120,
        linkDistance: 20
    },
    node_attr: {
        r: 5,
        title: function(d) { return d.label;}
    },
    node_style: {
        fill: function(d) { 
            return color(d.data.group); 
        },
        stroke: 'none'
    },
    edge_style: {
        stroke: '#999'
    }
}, true);