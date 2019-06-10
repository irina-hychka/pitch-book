#!/bin/bash
for f in styles/*.less
do
    lessc $f ${f/less/css}
done
