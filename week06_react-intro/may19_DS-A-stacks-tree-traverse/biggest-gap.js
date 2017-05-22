const Node = (n, gap = 0) => ({ value: n, gap, left: null, right: null });

class BiggestGap {
    constructor() {
        this.biggest = 0;
        this.biggestCount = 0;
        this.root = null;
    }

    add(n) { 
        if (!this.root) return this.root = Node(n);

        let lastSwitch = null;
        const trackLastSwitch = (branch, node) => {
            if (!lastSwitch) lastSwitch = { branch };
            else if (lastSwitch.branch !== branch) {
                lastSwitch = { branch, node };
            }
        }

        const updateFromLastSwitch = gap => {
            const { node } = lastSwitch;
            if (!node) return gap;

            if (node.gap === this.biggest) {
                this.biggestCount--;
                if (this.biggestCount === 0) this.biggest = 0;
            }

            node.gap -= gap;
            return Math.max(node.gap, gap);
        }

        let current = this.root;
        while (true) {
            const diff = current.value - n;
            if (!diff) return;

            const branch = diff < 0 ? 'left' : 'right';

            trackLastSwitch(branch, current);

            if (current[branch]) current = current[branch];
            else {
                let gap = Math.abs(diff);
                current[branch] = Node(n, gap);
                
                gap = updateFromLastSwitch(gap);

                if (gap === this.biggest) this.biggestCount++;
                else if (gap > this.biggest) {
                    this.biggest = gap;
                    this.biggestCount = 1;
                }
                break;
            }
        }   
    }
}


const gap = new BiggestGap();

[1, 4, 2, 7, 18, 3, 10, 15].forEach(n => {
    gap.add(n);
    console.log(n, gap.biggest);
});