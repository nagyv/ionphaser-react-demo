// @flow
import React, { useState, useCallback } from 'react'
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'

export default function Game () {
  const [isInitialized, initialize] = useState(false)
  const [ game ] = useState({
    width: '100%',
    height: '100%',
    type: Phaser.AUTO,
    scene: {
      init: function () {
        this.cameras.main.setBackgroundColor('#24252A')
      },
      create: function () {
        this.helloWorld = this.add.text(
          this.cameras.main.centerX,
          this.cameras.main.centerY,
          'Hello World', {
            font: '40px Arial',
            fill: '#ffffff'
          }
        )
        this.helloWorld.setOrigin(0.5)
      },
      update: function () {
        this.helloWorld.angle += 1
      }
    }
  })

  const startGame = useCallback(() => {
    initialize(true)
  }, [game.instance])

  return isInitialized
    ? <IonPhaser game={game} initialize={isInitialized} />
    : <button onClick={startGame}>Start game</button>
}
