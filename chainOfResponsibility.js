var General = (function() {// IIFE(Immediately-invoked function expression: 즉시 작동하는 함수식)
    function General() {}
    General.prototype.canMakeDecision = function() {
      // 복잡한 확인 코드
      return false;
    };
    General.prototype.makeDecision = function() {
      console.log('맞서 싸운다');
    };
    return General;
  })();


var Senator = (function() {
    function Senator() {}
    Senator.prototype.canMakeDecision = function() {
      // 복잡한 확인 코드
      return false;
    };
    Senator.prototype.makeDecision = function() {
      console.log('눈치를 본다');
    };
    return Senator;
  })();


var Emperor = (function() {
    function Emperor() {}
    Emperor.prototype.canMakeDecision = function() {
      // 복잡한 확인 코드
      return true;
    };
    Emperor.prototype.makeDecision = function() {
      console.log('항복한다');
      console.log('자결한다');
    };
    return Emperor;
  })();


var DecisionMaker = (function() {
    function DecisionMaker() {
      this.decisionMakers = [];
      this.decisionMakers.push(new General());//general 함수 push
      this.decisionMakers.push(new Senator());
      this.decisionMakers.push(new Emperor());
    }
    DecisionMaker.prototype.makeDecision = function() {
      for (var i = 0; i < this.decisionMakers.length; i++) {
        if (this.decisionMakers[i].canMakeDecision()) {
          return this.decisionMakers[i].makeDecision();
        }

      }
    };
    return DecisionMaker;
  })();



var choice = new DecisionMaker();
  choice.makeDecision(); // 항복한다 자결한다
