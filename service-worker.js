{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 self.addEventListener('install', event => \{\
  event.waitUntil(\
    caches.open('ordering-system-v1').then(cache => \{\
      return cache.addAll([\
        '/',\
        '/index.html',\
        '/manifest.json',\
        '/icon-192.png',\
        '/icon-512.png'\
        // add other static files here\
      ]);\
    \})\
  );\
\});\
\
self.addEventListener('fetch', event => \{\
  event.respondWith(\
    caches.match(event.request).then(response => \{\
      return response || fetch(event.request);\
    \})\
  );\
\});\
}