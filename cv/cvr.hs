#!/usr/bin/env stack
-- stack  --resolver lts-15.15 --install-ghc runghc --package blaze --package markdown --package text

{-# LANGUAGE OverloadedStrings #-}

import Prelude hiding (head, div, id)
import Text.Blaze.Html.Renderer.Text
import Text.Blaze.Html5 ((!), h1, canvas, script, docTypeHtml, head, meta, link, title, body, div, button, a)
import Text.Blaze.Html5.Attributes (href, src, id, charset, name, content, rel, class_, type_, media, style)
import Text.Markdown
import qualified Data.Text.Lazy.IO as T
import qualified Data.Text.Lazy as T

main = renderHtml . fromMarkdownCV <$> T.readFile "cv.mk" >>= T.writeFile "index.html"

fromMarkdownCV cv = docTypeHtml $ do
  head $ do
    meta ! charset "utf-8"
    title "Mateusz Curylo"
    meta ! name "description" ! content "Mateusz Curylo CV"
    meta ! name "author" ! content "Mateusz Curylo"
    meta ! name "viewport" ! content "width=device-width, initial-scale=1"
    link ! href "css/normalize.css" ! rel "stylesheet" ! media "screen"
    link ! href "css/style.css" ! rel "stylesheet" ! media "screen"
    link ! href "css/print.css" ! rel "stylesheet" ! media "print"
    link ! href "favicon.ico" ! rel "icon" ! type_ "image/ico"
  body $ do
    div ! class_ "post_container" $ do
      canvas ! id "bckg" $ ""
      div ! class_ "post_content" $ markdown def cv
      script ! src "bckg.js" $ ""
